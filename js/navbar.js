// navbar.js

class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="logo-container">
          <img src="./assets/logos/circle.svg" alt="Logo" class="logo" />
        </div>
        <ul class="main-nav">
          <li> <a href="./index.html" class="menu-item">Home</a></li>
          <li> <a href="./index.html" class="menu-item">Projects</a></li>
          <li> <a href="./index.html" class="menu-item">Services</a></li>
        </ul>
        <div class="btn">
          <a href="./pages/contact.html" class="blue-button">Contact Us</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('main-navbar', MainNavbar);
