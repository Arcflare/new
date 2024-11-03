// script.js

// document.getElementById("contactForm").addEventListener("submit", async function(event) {
//     event.preventDefault();

//     const formData = new FormData(this);
//     formData.append("url", window.location.href); // Добавляем URL страницы

//     const responseDiv = document.getElementById("response");

//     try {
//         const response = await fetch("send.php", {
//             method: "POST",
//             body: formData,
//         });

//         const result = await response.json();
        
//         if (result.success) {
//             responseDiv.textContent = "Сообщение успешно отправлено!";
//             responseDiv.style.color = "green";
//         } else {
//             responseDiv.textContent = "Ошибка при отправке сообщения.";
//             responseDiv.style.color = "red";
//         }
//     } catch (error) {
//         responseDiv.textContent = "Ошибка соединения.";
//         responseDiv.style.color = "red";
//     }

//     this.reset();
// });

(function ($) {
    $(".contact-form").submit(function (event) {
      event.preventDefault();
   
      // Сообщения формы
      let successSendText = "Сообщение успешно отправлено";
      let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
      let requiredFieldsText = "Заполните поля с именем и телефоном";
   
      // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
      let message = $(this).find(".contact-form__message");
   
      let form = $("#" + $(this).attr("id"))[0];
      let fd = new FormData(form);
      $.ajax({
        url: "/telegramform/php/send-message-to-telegram.php",
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: () => {
          $(".preloader").addClass("preloader_active");
        },
        success: function success(res) {
          $(".preloader").removeClass("preloader_active");
   
          // Посмотреть на статус ответа, если ошибка
          // console.log(res);
          let respond = $.parseJSON(res);
   
          if (respond === "SUCCESS") {
            message.text(successSendText).css("color", "#21d4bb");
            setTimeout(() => {
              message.text("");
            }, 4000);
          } else if (respond === "NOTVALID") {
            message.text(requiredFieldsText).css("color", "#d42121");
            setTimeout(() => {
              message.text("");
            }, 3000);
          } else {
            message.text(errorSendText).css("color", "#d42121");
            setTimeout(() => {
              message.text("");
            }, 4000);
          }
        }
      });
    });
  })(jQuery);