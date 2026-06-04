class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="nav">
        <a href="index.html" class="logo-container">
          <img src="logo.png" alt="Lindi Logo" class="logo-img">
          <span class="brand-name">LINDI</span>
        </a>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="about.html" class="nav-link">About</a>
          <a href="shop.html" class="nav-link nav-cta">Shop Now</a>
        </div>
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div class="mobile-overlay" id="mobileOverlay"></div>
      <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="shop.html" class="nav-cta">Shop Now</a>
      </div>
    `;

    // Attach event listeners for mobile menu
    const mobileMenuBtn = this.querySelector('.mobile-menu-btn');
    const mobileMenu = this.querySelector('.mobile-menu');
    const mobileOverlay = this.querySelector('.mobile-overlay');

    if (mobileMenuBtn && mobileMenu && mobileOverlay) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });

      mobileOverlay.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Scroll effect
    window.addEventListener('scroll', () => {
      const nav = this.querySelector('#nav');
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    });
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-brand">
            <h3>LINDI</h3>
            <p>Handcrafted sustainable clothing made with purpose in Sri Lanka. Quality pieces designed to last.</p>
            <div class="social-links">
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg></a>
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></a>
              <a href="https://wa.me/94725050456" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Shop</h4>
            <a href="shop.html">All Products</a>
            <a href="shop.html">Tees</a>
            <a href="shop.html">Hoodies</a>
            <a href="shop.html">Bottoms</a>
          </div>
          <div class="footer-section">
            <h4>About</h4>
            <a href="about.html">Our Story</a>
            <a href="about.html">Sustainability</a>
            <a href="about.html">Artisans</a>
            <a href="about.html">Contact</a>
          </div>
          <div class="footer-section">
            <h4>Support</h4>
            <a href="#">Size Guide</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 LINDI CLOTHING — Handcrafted in Sri Lanka</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
