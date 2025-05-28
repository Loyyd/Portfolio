import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Hier könntest du eine E-Mail-Funktion oder API-Aufruf implementieren
    alert("Danke für deine Nachricht!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form className="contact-form fade-in-initial" onSubmit={handleSubmit}>
      <h2>Kontakt aufnehmen</h2>
      <input type="text" name="name" placeholder="Dein Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Deine E-Mail" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Nachricht" value={form.message} onChange={handleChange} required />
      <button type="submit">Absenden</button>
    </form>
  );
};

export default ContactForm;