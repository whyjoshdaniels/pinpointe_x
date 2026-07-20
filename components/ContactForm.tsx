
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent!");
    } else {
      alert("Error sending message.");

    };

    console.log("Form submitted:", form);
  };


  return (
    <section className="contact-section">
      <div className="container">
        <header className="section-head">
          <h2>Contact Us</h2>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
