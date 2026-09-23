import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <article className="legal-document">
          <a className="back-link" href="/">
            <span aria-hidden="true">←</span>
            Zurück zur Startseite
          </a>
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:</p>
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

          <h2>3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
          <h3>a) Beim Besuch der Website</h3>
          <p>Beim Aufrufen dieser Website werden durch den Hosting-Provider automatisch Informationen erfasst. Dies sind:</p>
          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
          </ul>
          <p>
            Diese Daten werden zur Sicherstellung eines störungsfreien Betriebs der Website sowie zur Verbesserung
            unseres Angebots ausgewertet.
          </p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>

          <h3>b) Kontaktaufnahme per E-Mail</h3>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
          </p>
          <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>

          <h2>4. Hosting</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet (Hosting-Provider). Personenbezogene Daten,
            die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
          </p>
          <p>Hierzu können insbesondere IP-Adressen, Kontaktanfragen und sonstige Daten gehören.</p>

          <h2>5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
            <li>Berichtigung unrichtiger Daten zu verlangen</li>
            <li>Löschung Ihrer Daten zu verlangen</li>
            <li>Einschränkung der Verarbeitung zu verlangen</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen</li>
            <li>Datenübertragbarkeit zu verlangen</li>
          </ul>
          <p>Außerdem haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>

          <h2>6. Speicherdauer</h2>
          <p>
            Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck für die Datenverarbeitung entfällt oder Sie
            die Löschung verlangen.
          </p>

          <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
            erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt.
          </p>

          <h2>8. Widerspruch gegen Werbe-E-Mails</h2>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
            ausdrücklich angeforderter Werbung wird hiermit widersprochen.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

