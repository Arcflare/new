// api/send.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ success: true, message: "Функция работает!" });
    } else {
        res.status(405).json({ success: false, message: "Метод не поддерживается" });
    }
}