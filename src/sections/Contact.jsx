import { useState } from "react";
import Icon from "../components/Icon.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function ContactItem({ icon, title, children }) {
  return (
    <div className="contact-item">
      <div className="icon-box tiny">
        <Icon name={icon} size={22} />
      </div>
      <div>
        <h4>{title}</h4>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("Name")?.trim();
    const email = formData.get("E-Mail")?.trim();
    const subjectLine = formData.get("Betreff")?.trim();
    const message = formData.get("Nachricht")?.trim();

    if (!name || !email || !subjectLine || !message) {
      setFormStatus("Bitte Name, E-Mail, Betreff und Nachricht ausfüllen.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("Ihre Anfrage wird gesendet...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@alphareifen.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Die Anfrage konnte nicht automatisch gesendet werden.");
      }

      form.reset();
      setFormStatus("Danke. Ihre Nachricht wurde gesendet.");
    } catch (error) {
      const subject = encodeURIComponent(subjectLine || "Neue Nachricht von alphareifen.com");
      const body = encodeURIComponent(
        [
          `Name: ${name}`,
          `E-Mail: ${email}`,
          `Betreff: ${subjectLine}`,
          "",
          `Nachricht: ${message}`,
        ].join("\n"),
      );

      window.location.href = `mailto:info@alphareifen.com?subject=${subject}&body=${body}`;
      setFormStatus("Ihr E-Mail-Programm wurde geöffnet. Bitte die Nachricht dort absenden.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="section contact">
      <SectionTitle eyebrow="KONTAKT AUFNEHMEN" title="Kontakt" />
      <div className="contact-grid">
        <div className="contact-info">
          <ContactItem icon="MapPin" title="Adresse">
            <p>Platanenstraße 1</p>
            <p>32108 Bad Salzuflen</p>
          </ContactItem>
          <ContactItem icon="Phone" title="Telefon">
            <a href="tel:+491629673170">+49 162 9673170</a>
            <a href="tel:052227077628">05222 7077628</a>
          </ContactItem>
          <ContactItem icon="Mail" title="E-Mail">
            <a href="mailto:info@alphareifen.com">info@alphareifen.com</a>
          </ContactItem>
          <ContactItem icon="Clock" title="Öffnungszeiten">
            <p>Mo – Fr: 09:00 – 18:00 Uhr</p>
            <p>Sa: 09:00 - 13:00 Uhr</p>
          </ContactItem>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="Neue Terminanfrage von alphareifen.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="form-hidden" />

          <input type="text" name="Name" placeholder="Ihr Name" autoComplete="name" />
          <input type="email" name="E-Mail" placeholder="Ihre E-Mail" autoComplete="email" />
          <input type="text" name="Betreff" placeholder="Betreff" />
          <textarea rows="6" name="Nachricht" placeholder="Ihre Nachricht" />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "WIRD GESENDET..." : "NACHRICHT SENDEN"}
          </button>
          {formStatus ? <p className="form-status">{formStatus}</p> : null}
        </form>
      </div>
      <div className="map-frame">
        <iframe
          title="Alpha Reifen Karte"
          loading="lazy"
          src="https://www.google.com/maps?q=Platanenstra%C3%9Fe+1,+32108+Bad+Salzuflen&z=17&output=embed"
        />
      </div>
    </section>
  );
}
