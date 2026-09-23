export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <img src="/assets/logo-alpha.png" alt="Alpha Reifen" />
          <p>Ihr kompetenter Partner für Reifen, Felgen und Autoservice in Bad Salzuflen.</p>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          <a href="/#leistungen">Leistungen</a>
          <a href="/#ueber-uns">Über uns</a>
          <a href="/#vorteile">Vorteile</a>
          <a href="/#kontakt">Kontakt</a>
        </div>
        <div>
          <h4>KONTAKT</h4>
          <a href="tel:+491629673170">+49 162 9673170</a>
          <a href="tel:052227077628">05222 7077628</a>
          <a href="mailto:info@alphareifen.com">info@alphareifen.com</a>
          <p>Platanenstraße 1, 32108 Bad Salzuflen</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Alpha Reifen. Alle Rechte vorbehalten.</span>
        <div>
          <a href="/datenschutz">Datenschutzerklärung</a>
          <a href="/impressum">Impressum</a>
        </div>
      </div>
    </footer>
  );
}

