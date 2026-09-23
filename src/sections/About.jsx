import Icon from "../components/Icon.jsx";

export default function About() {
  return (
    <section id="ueber-uns" className="section about">
      <div className="about-copy">
        <span className="eyebrow">ÜBER UNS</span>
        <h2>Erfahrung trifft Leidenschaft</h2>
        <p>
          Alpha Reifen steht seit Jahren für erstklassigen Autoservice in Bad Salzuflen. Unser erfahrenes Team
          verbindet technisches Know-how mit modernster Ausstattung.
        </p>
        <p>
          Ob Reifenwechsel, Bremsenservice oder umfassende Inspektion – bei uns wird jedes Fahrzeug mit höchster
          Sorgfalt behandelt. Transparenz, Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.
        </p>
        <a className="button primary compact" href="#kontakt">
          JETZT KONTAKTIEREN
        </a>
      </div>
      <div className="about-image">
        <img src="/assets/about-auto.jpg" alt="Fachmann bei der Arbeit" />
        <div className="quality-card">
          <div className="check">
            <Icon name="Check" size={28} />
          </div>
          <div>
            <h3>Qualität garantiert</h3>
            <p>Meisterbetrieb mit modernster Technik</p>
          </div>
        </div>
      </div>
    </section>
  );
}
