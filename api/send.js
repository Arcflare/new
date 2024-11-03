// api/send.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ success: false, message: "Метод не поддерживается" });
        return;
    }

    // Извлекаем данные из запроса
    const { name, phone, email, message, url } = req.body;

    // Проверка данных
    if (!name || !phone || !email || !message) {
        res.status(400).json({ success: false, message: "Все поля обязательны" });
        return;
    }

    // Токен и ID чата Telegram
    const token = "7468492860:AAEd2dvjmZeMkOEuWVZFqIwErfPaeBwlBx4";  // Замените на свой токен
    const chat_id = "6737551184";  // Замените на свой ID чата

    // Формируем текст сообщения
    const telegramMessage = `
        Новая заявка с сайта
        Имя: ${name}
        Телефон: ${phone}
        Почта: ${email}
        Сообщение: ${message}
        Дата: ${new Date().toLocaleDateString()}
        Время: ${new Date().toLocaleTimeString()}
        URL страницы: ${url}
    `;

    // Отправляем сообщение в Telegram
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
        const telegramResponse = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chat_id,
                text: telegramMessage,
            }),
        });

        const data = await telegramResponse.json();

        if (data.ok) {
            res.status(200).json({ success: true });
        } else {
            res.status(500).json({ success: false, message: "Ошибка при отправке сообщения" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Ошибка сервера" });
    }
};