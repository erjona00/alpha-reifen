import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <article className="legal-document">
          <a className="back-link" href="/">
            <span aria-hidden="true">←</span>
            Zurück zur Startseite
          </a>
          <h1>Impressum</h1>

          <h2>Angaben gemäß § 5 TMG</h2>
          <address>
            Abaz Isufi
            <br />
            Platanenstraße 1
            <br />
            32108 Bad Salzuflen
            <br />
            Deutschland
          </address>
          <p>
            Telefon: <a href="tel:052227077628">05222 7077628</a>
            <br />
            E-Mail: <a href="mailto:info@alphareifen.com">info@alphareifen.com</a>
          </p>

          <h2>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</h2>
          <p>DE355525336</p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <address>
            Abaz Isufi
            <br />
            Platanenstraße 1
            <br />
            32108 Bad Salzuflen
          </address>
        </article>
      </main>
      <Footer />
    </>
  );
}

