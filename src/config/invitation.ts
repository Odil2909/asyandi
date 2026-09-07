export const invitation = {
  childName: "Ан Айлин",
  birthDate: "16.09.2025",
  age: 1,
  eventDate: "16.09.2026",
  eventTime: "19:00",
  venue: "Bar Villa",
  address: "Ташкент, ул. Уйсозлар, 7",
  parents: ["Алена", "Дима"],
  phone: "972333335",
  telegramUrl: "", // TODO: добавить username или прямую ссылку на Telegram.
  maps: {
    latitude: 41.25395114518315,
    longitude: 69.32503525396709,
    yandex:
      "https://yandex.com/maps/?ll=69.32503525396709%2C41.25395114518315&z=17&pt=69.32503525396709%2C41.25395114518315",
    google:
      "https://www.google.com/maps/search/?api=1&query=41.25395114518315%2C69.32503525396709",
    embed:
      "https://www.google.com/maps?q=41.25395114518315%2C69.32503525396709&z=17&output=embed",
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
