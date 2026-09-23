import Header from "../components/Header.jsx";
import Icon from "../components/Icon.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <h1>
          Autoservice in
          <br />
          Bad Salzuflen.
        </h1>
        <p>Professioneller Service rund um Ihr Fahrzeug – von Reifen über Bremsen bis zur Inspektion.</p>
        <div className="hero-actions">
          <a className="button primary" href="#kontakt">
            <Icon name="Calendar" size={18} />
            TERMIN VEREINBAREN
          </a>
          <a className="button outline" href="#leistungen">
            <Icon name="Wrench" size={18} />
            UNSERE LEISTUNGEN
          </a>
        </div>
      </div>
    </section>
  );
}
