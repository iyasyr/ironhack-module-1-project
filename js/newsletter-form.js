class NewsletterForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="newsletter">
        <h2>Do you have any questions?</h2>
        <h3>Let us help you!</h3>
        <form id="newsletter-form" novalidate>
          <input id="email" name="email" type="email" placeholder="Enter your email" required autocomplete="email"
            aria-label="Email address" class="newsletter-input"/>
            <button type="submit" class="blue-button submit-button">Subscribe</button>
            <span id="email-error" class="email-error"></span>
        </form>
      </section>
    `;

    const form = this.querySelector("#newsletter-form");
    const emailInput = this.querySelector("#email");
    const emailError = this.querySelector("#email-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Use native validation for required and type="email"
      if (!emailInput.value.trim()) {
        emailError.textContent = "Please enter your email address.";
        emailError.style.display = "block";
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        return;
      }
      if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        return;
      }

      // If valid:
      emailError.textContent = "";
      emailError.style.display = "none";
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      alert("Thank you for subscribing! We will contact you as soon as possible.");
      form.reset();
      emailInput.classList.remove('valid');
    });
  }
}

customElements.define('newsletter-form', NewsletterForm);
