import { useRef, useState } from "react";
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
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit() {
    setIsSubmitting(true);
    setFormStatus("Ihre Anfrage wird gesendet...");
  }

  function handleFormSubmitLoad() {
    if (!isSubmitting) {
      return;
    }

    formRef.current?.reset();
    setFileName("");
    setIsSubmitting(false);
    setFormStatus("Vielen Dank. Ihre Terminanfrage wurde erfolgreich gesendet.");
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
        <form
          ref={formRef}
          className="contact-form"
          action="https://formsubmit.co/info@alphareifen.com"
          method="POST"
          encType="multipart/form-data"
          target="formsubmit-frame"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="Neue Terminanfrage von alphareifen.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="form-hidden" />

          <input type="text" name="Name" placeholder="Ihr Name" autoComplete="name" required />
          <input type="email" name="E-Mail" placeholder="Ihre E-Mail" autoComplete="email" required />
          <input type="tel" name="Telefonnummer" placeholder="Telefonnummer" autoComplete="tel" required />
          <input type="text" name="Betreff" placeholder="Betreff" />
          <textarea rows="6" name="Nachricht" placeholder="Ihre Nachricht" />
          <label className="file-field">
            <span>Fahrzeugschein</span>
            <span className="file-picker">
              <span className="file-picker-button">Datei auswählen</span>
              <span className="file-picker-name">{fileName || "Keine Datei ausgewählt"}</span>
            </span>
            <input
              className="file-input"
              type="file"
              name="attachment"
              accept="image/png, image/jpeg"
              onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
            />
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "WIRD GESENDET..." : "TERMINANFRAGE SENDEN"}
          </button>
          {formStatus ? (
            <p className={`form-status ${formStatus.startsWith("Vielen Dank") ? "success" : ""}`}>
              {formStatus}
            </p>
          ) : null}
        </form>
        <iframe
          title="FormSubmit Antwort"
          name="formsubmit-frame"
          className="form-submit-frame"
          onLoad={handleFormSubmitLoad}
          aria-hidden="true"
        />
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
