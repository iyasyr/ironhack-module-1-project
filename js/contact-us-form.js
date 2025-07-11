class ContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form id="form-container" class="formClass" novalidate>
        <h1 class='contact-us-title'>Contact Us</h1>
        <div class="input-container">
            <label for="name">Full Name</label><br>
            <input type="text" placeholder="Enter your full name" name="name" id="name" class="contact-form-input" required>
            <p id="errorName" class="errorForm" hidden>Please, complete the field NAME</p>
        </div>
        <div class="emailAndPhone">
            <div class="input-container">
                <label for="email">Email</label><br>
                <input type="email" name="email" id="email" placeholder="Enter your email address" class="contact-form-input" required>
                <p id="errorEmail" hidden class="errorForm">Please, complete the field EMAIL</p>
                <p id="errorFormatEmail" hidden class="errorForm">Invalid email</p>
            </div>
            <div>
                <label for="phone">Phone</label><br>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number" class="contact-form-input" required>
                <p id="errorPhone" class="errorForm" hidden>Please enter your phone number</p>
            </div>
        </div>
        <div class="input-container">
            <label for="message">Message</label><br>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message here..." class="contact-form-input message-textarea" required></textarea>
            <p id="errorMessageUser" hidden class="errorForm">Write us at least 5 characters</p>
        </div>
        <div class="buttonSubmit">
            <button type="submit" id="submitForm" class="contact-us-submit-button">Submit</button>
            <p class="errorForm" id="errorSubmit" style="border-color: red; display:none;">PLEASE, REVIEW THE REQUIRED FIELDS</p>
        </div>
        <div class="custom-modal" id="modal">
          <div class="custom-modal-content">
            <button class="modal-close" id="modal-close" aria-label="Close">&times;</button>
            <div class="modal-title">Thank you for subscribing!</div>
            <div class="modal-text">We will contact you as soon as possible.</div>
          </div>
        </div>
      </form>
    `;

    // ---- ELEMENTS ----
    const form = this.querySelector("#form-container");
    const nameInput = this.querySelector("#name");
    const emailInput = this.querySelector("#email");
    const phoneInput = this.querySelector("#phone");
    const messageInput = this.querySelector("#message");
    const submitBtn = this.querySelector("#submitForm");

    const errorName = this.querySelector("#errorName");
    const errorEmail = this.querySelector("#errorEmail");
    const errorFormatEmail = this.querySelector("#errorFormatEmail");
    const errorPhone = this.querySelector("#errorPhone");
    const errorMessageUser = this.querySelector("#errorMessageUser");
    const errorSubmit = this.querySelector("#errorSubmit");
    const modal = this.querySelector("#modal");
    const modalClose = this.querySelector("#modal-close");

    // ---- VALIDATION FUNCTIONS ----
    function setValidationClass(input, isValid) {
      input.classList.remove('valid', 'invalid');
      input.classList.add(isValid ? 'valid' : 'invalid');
    }

    function validateName() {
      const value = nameInput.value.trim();
      let isValid = !!value;
      // Check for forbidden name
      if (isValid && value.toLowerCase() === 'ironhack') {
        alert("You cannot be Ironhack, because I am Ironhack.");
        nameInput.value = ""; // clear the field
        nameInput.focus();
        isValid = false;
      }
      setValidationClass(nameInput, isValid);
      errorName.hidden = isValid;
      return isValid;
    }

    function validateEmail() {
      const value = emailInput.value.trim();
      let isValid = false;
      if (!value) {
        errorEmail.hidden = false;
        errorFormatEmail.hidden = true;
      } else {
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        errorEmail.hidden = true;
        errorFormatEmail.hidden = isValid;
        errorFormatEmail.hidden = isValid;
        if (!isValid) errorFormatEmail.hidden = false;
      }
      setValidationClass(emailInput, isValid);
      return isValid;
    }

    function validatePhone() {
      const value = phoneInput.value.trim();

      // Accepts +, digits, spaces, dashes, and parentheses
      const phonePattern = /^\+?[0-9\s\-().]{7,20}$/;

      // Remove non-digit to count digits only
      const digitsCount = value.replace(/\D/g, '').length;
      const isValid = phonePattern.test(value) && digitsCount >= 7 && digitsCount <= 15;

      setValidationClass(phoneInput, isValid);
      errorPhone.hidden = isValid;
      if (!isValid) {
        errorPhone.textContent = "Please enter a valid phone number (7-15 digits, numbers only)";
      }
      return isValid;
    }

    function validateMessage() {
      const value = messageInput.value.trim();
      const isValid = value.length >= 5;
      setValidationClass(messageInput, isValid);
      errorMessageUser.hidden = isValid;
      return isValid;
    }

    // ---- EVENT LISTENERS ----
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener("blur", validateEmail);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("blur", validatePhone);
    phoneInput.addEventListener("input", validatePhone);
    messageInput.addEventListener("blur", validateMessage);
    messageInput.addEventListener("input", validateMessage);

    [nameInput, emailInput, phoneInput, messageInput].forEach(input =>
      input.addEventListener("input", () => {
        errorSubmit.style.display = "none";
      })
    );

    // ---- SUBMIT HANDLER ----
    form.addEventListener("submit", function(e) {
      let valid =
        validateName() &
        validateEmail() &
        validatePhone() &
        validateMessage();

      if (!valid) {
        e.preventDefault();
        errorSubmit.style.display = "block";
        return false;
      }
      e.preventDefault(); // Prevent actual form submission for demo
      errorSubmit.style.display = "none";

      // Collect form results
      const resultMsg = 
        `Thank you for contacting us!\n\n` +
        `Name: ${nameInput.value}\n` +
        `Email: ${emailInput.value}\n` +
        `Phone: ${phoneInput.value}\n` +
        `Message: ${messageInput.value}`;

      modal.style.display = "flex";
      
      form.reset();
    });

    // Close modal on X or background click
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modalClose.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        modal.style.display = "none";
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }
}

customElements.define('contact-form', ContactForm);
