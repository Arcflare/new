// api/send.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
      res.status(405).json({ success: false, message: "Метод не поддерживается" });
      return;
  }

  // Логика обработки данных формы
  res.status(200).json({ success: true, message: "Форма успешно отправлена!" });
}