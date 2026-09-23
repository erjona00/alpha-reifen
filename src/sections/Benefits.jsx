import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { benefits } from "../data/siteData.js";

export default function Benefits() {
  return (
    <section id="vorteile" className="section benefits">
      <SectionTitle eyebrow="IHRE VORTEILE" title="Warum Alpha Reifen?" />
      <div className="benefit-grid">
        {benefits.map(([icon, title, copy]) => (
          <article className="card benefit-card" key={title}>
            <div className="icon-box small">
              <Icon name={icon} size={24} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
