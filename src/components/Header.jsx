import { navItems } from "../data/siteData.js";

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Alpha Reifen">
        <img src="/assets/logo-alpha.png" alt="Alpha Reifen" />
      </a>
      <nav>
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="top-cta" href="/#kontakt">
        TERMIN VEREINBAREN
      </a>
    </header>
  );
}
