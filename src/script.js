document.addEventListener("DOMContentLoaded", function () {
  // Елементи для першого попапа
  const openPopupButton = document.getElementById("open-first-popup");
  const popup = document.getElementById("first-popup");
  const closePopupButton = document.getElementById("close-first-popup");
  const submitEmailButton = document.getElementById("submit-email");
  const mainTitle = document.querySelector(".main-title");

  // Елементи для другого попапа
  const secondPopup = document.getElementById("second-popup");
  const closeSecondPopupButton = document.getElementById("close-second-popup");
  const sendEmailButton = document.getElementById("send-email");
  const emailInput = document.getElementById("email-input");
  const thankYouMessage = document.getElementById("thank-you-message");
  const returnToHome = document.getElementById("return-to-home");

  openPopupButton.addEventListener("click", function (event) {
    event.preventDefault();
    popup.style.display = "flex";
  });

  closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
    mainTitle.scrollIntoView({ behavior: "smooth" });
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  submitEmailButton.addEventListener("click", function () {
    secondPopup.style.display = "flex";
  });

  sendEmailButton.addEventListener("click", function () {
    const emailValue = emailInput.value.trim();

    if (isValidEmail(emailValue)) {
      secondPopup.style.display = "none";
      thankYouMessage.style.display = "flex";
    } else {
      alert("Будь ласка, введіть правильну адресу електронної пошти.");
    }
  });

  closeSecondPopupButton.addEventListener("click", function () {
    secondPopup.style.display = "none";
  });

  secondPopup.addEventListener("click", function (e) {
    if (e.target === secondPopup) {
      secondPopup.style.display = "none";
    }
  });

  returnToHome.addEventListener("click", function () {
    thankYouMessage.style.display = "none";
    popup.style.display = "none";
    mainTitle.scrollIntoView({ behavior: "smooth" });
  });

  // Верифікація електронної пошти
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }
});
