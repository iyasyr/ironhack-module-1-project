class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="address-info">
          <a class="address-info-logo" href="/">
            <img src="/assets/logos/circle.svg" alt="Circle Logo">
          </a>
          <p>
            2972 Westheimer Rd. Santa Ana,<br>
            Illinois 85486
          </p>
        </div>
        <ul class="sitemap">
          <li><a href="#">Team</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
