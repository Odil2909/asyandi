import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxXsKh2zkbLrk-4qnksQu2Gn3rQ6iKDB3vIFyOZAP2IgW6rBnEcAJcVuTbPFBy4pI-Deg/exec";

type RsvpPayload = {
  name: string;
  guests: string;
  attending: "да" | "нет";
  comment: string;
};

export async function POST(request: Request) {
  let payload: RsvpPayload;

  try {
    const body = await request.json();
    if (
      typeof body?.name !== "string" ||
      typeof body?.guests !== "string" ||
      (body?.attending !== "да" && body?.attending !== "нет") ||
      typeof body?.comment !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Некорректные данные RSVP." },
        { status: 400 },
      );
    }
    payload = {
      name: body.name.trim(),
      guests: body.guests,
      attending: body.attending,
      comment: body.comment.trim(),
    };
  } catch {
    return NextResponse.json(
      { success: false, error: "Некорректный JSON-запрос." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
    });

    const responseText = await response.text();
    let responseData: { success?: boolean; error?: string } | null = null;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      // Apps Script may return an empty or non-JSON success response.
    }

    if (!response.ok || responseData?.success === false) {
      return NextResponse.json(
        {
          success: false,
          error:
            responseData?.error ||
            `Google Sheets отклонил запрос (HTTP ${response.status}).`,
        },
        { status: response.ok ? 502 : response.status },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Не удалось связаться с Google Sheets.",
      },
      { status: 502 },
    );
  }
}
