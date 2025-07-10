class ScrollToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <span class="fa fa-arrow-up btn-scroll btn-scroll-position btn-scroll-style"></span>
    `;

    const btn = this.querySelector('.btn-scroll');

    // Show button after scrolling 100px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
      } else {
        btn.style.visibility = 'hidden';
        btn.style.opacity = '0';
      }
    });

    // Scroll to top smoothly on click
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

customElements.define('scroll-to-top', ScrollToTop);