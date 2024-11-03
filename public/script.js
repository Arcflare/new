// public/script.js

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    formData.append("url", window.location.href); // Добавляем URL страницы

    const responseDiv = document.getElementById("response");

    try {
        const response = await fetch("/send", {  // Обновляем путь на /send
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        
        if (result.success) {
            responseDiv.textContent = "Сообщение успешно отправлено!";
            responseDiv.style.color = "green";
        } else {
            responseDiv.textContent = "Ошибка при отправке сообщения.";
            responseDiv.style.color = "red";
        }
    } catch (error) {
        responseDiv.textContent = "Ошибка соединения.";
        responseDiv.style.color = "red";
    }

    this.reset();
});

