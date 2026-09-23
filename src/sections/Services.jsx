import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { services } from "../data/siteData.js";

export default function Services() {
  return (
    <section id="leistungen" className="section">
      <SectionTitle eyebrow="WAS WIR BIETEN" title="Unsere Leistungen">
        Umfassender Autoservice aus einer Hand – professionell, zuverlässig und zu fairen Preisen.
      </SectionTitle>
      <div className="service-grid">
        {services.map(([icon, title, copy]) => (
          <article className="card service-card" key={title}>
            <div className="icon-box">
              <Icon name={icon} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
