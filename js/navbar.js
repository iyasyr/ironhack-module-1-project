class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="navbar-container">
        <nav class="navbar">
          <div class="logo-container">
            <img src="/assets/logos/circle.svg" alt="Logo" class="logo" />
          </div>
          <button class="burger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <ul class="main-nav">
            <li><a href="/" class="menu-item">Home</a></li>
            <li><a href="/#projects" class="menu-item">Projects</a></li>
            <li><a href="/#services" class="menu-item">Services</a></li>
            <li class="mobile-contact-btn">
              <a href="/contact/contact-us.html" class="menu-item">Contact Us</a>
            </li>
          </ul>
          <div class="btn">
            <a href="/contact/contact-us.html" class="btn blue-button">Contact Us</a>
          </div>
        </nav>
      </div>
    `;

    // Burger menu logic
    const burger = this.querySelector('.burger');
    const nav = this.querySelector('.main-nav');
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
      // Accessibility
      burger.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    // --- SCROLL SPY LOGIC ---
    // IDs of your sections in DOM
    const sections = ['hero', 'projects', 'services']; // Make sure your HTML uses id="hero", etc!
    const menuLinks = this.querySelectorAll('.menu-item');

    function setActiveOnScroll() {
      let index = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust offset as needed (navbar height)
          if (rect.top <= 80) {
            index = i;
          }
        }
      }
      menuLinks.forEach(l => l.classList.remove('active'));
      menuLinks[index].classList.add('active');
    }

    // Attach listeners globally
    window.addEventListener('scroll', setActiveOnScroll);
    window.addEventListener('DOMContentLoaded', setActiveOnScroll);
    setActiveOnScroll(); // Run on load
  }
}
customElements.define('main-navbar', MainNavbar);

window.addEventListener('scroll', function () {
  const navbarContainer = document.querySelector('.navbar-container');
  if (window.scrollY > 1) {
    navbarContainer.classList.add('scrolled');
  } else {
    navbarContainer.classList.remove('scrolled');
  }
});
