export const invitation = {
  childName: "Ан Айлин",
  birthDate: "16.09.2025",
  age: 1,
  eventDate: "16.09.2026",
  eventTime: "19:00",
  venue: "Bar Villa",
  address: "Адрес уточняется",
  parents: ["Алена", "Дима"],
  phone: "972333335",
  telegramUrl: "", // TODO: добавить username или прямую ссылку на Telegram.
  maps: {
    yandex:
      "https://yandex.ru/maps/org/bar_villa/34988655641?si=21djbxnpywv6n9ptrfq12nyv7r",
    google: "https://maps.app.goo.gl/7QxTgmetVTrthf4c8",
  },
  program: [
    { time: "18:30", title: "Сбор гостей", note: "Встречаемся и знакомимся" },
    { time: "19:00", title: "Начало праздника", note: "Первый тост за Айлин" },
    {
      time: "19:30",
      title: "Праздничный ужин",
      note: "Время для тёплых разговоров",
    },
    { time: "20:00", title: "Толчаби", note: "Главная традиция этого вечера" },
  ],
  tolchabi: [
    { icon: "book", title: "Книга", description: "Знания и учёба" },
    { icon: "pen", title: "Ручка", description: "Творчество и писательство" },
    { icon: "coin", title: "Деньги", description: "Благополучие" },
    { icon: "thread", title: "Нить", description: "Долгая жизнь" },
    { icon: "ball", title: "Мяч", description: "Спорт и активность" },
  ],
} as const;

export const eventDateTime = new Date("2026-09-16T19:00:00+03:00");
