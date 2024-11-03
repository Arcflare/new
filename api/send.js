// api/send.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
      res.status(405).json({ success: false, message: "Метод не поддерживается" });
      return;
  }

  // Здесь вы можете добавить код для отправки сообщения в Telegram

  res.status(200).json({ success: true, message: "Форма успешно отправлена!" });
}
