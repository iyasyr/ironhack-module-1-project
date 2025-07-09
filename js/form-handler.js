document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  const emailInput = form.querySelector('#email');
  const errorMsg = form.querySelector('#email-error');

  form.addEventListener('submit', function (e) {
    if (emailInput.value.trim() === "") {
      e.preventDefault();
      errorMsg.textContent = "Email is required.";
      errorMsg.style.display = "block";
      emailInput.focus();
    } else if (!emailInput.validity.valid) {
      e.preventDefault();
      errorMsg.textContent = "Please enter a valid email address.";
      errorMsg.style.display = "block";
      emailInput.focus();
    } else {
      errorMsg.style.display = "none";
    }
  });

  // Hide error if user starts typing again
  emailInput.addEventListener('input', function () {
    errorMsg.style.display = "none";
  });
});
