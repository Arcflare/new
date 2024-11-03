fetch("/api/send", { // Убедитесь, что путь точно совпадает с расположением файла в Vercel
    method: "POST",
    body: formData,
});