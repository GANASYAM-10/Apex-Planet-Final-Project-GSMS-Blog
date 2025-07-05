// Form submission alert
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email!");
      } else {
        alert("Thanks for subscribing, Ganasyam!");
        emailInput.value = "";
      }
    });
  }
});
