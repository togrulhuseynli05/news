import { useState } from "react";

function NewsletterSignup({ authorName }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setMessage("Zəhmət olmasa düzgün e-poçt ünvanı daxil edin.");
      return;
    }

    setMessage(
      `Təşəkkürlər${name ? `, ${name}` : ""}! Abunəlik qeyd olundu (mock).`,
    );
    setName("");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h3 className="newsletter__title">Sign up for The NBC News Newsletter</h3>
      <p className="newsletter__by">By {authorName}</p>
      <p className="newsletter__text">
        A weekly newsletter that helps readers stay informed and think more
        critically about the world.
      </p>

      <form className="newsletter__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="E-poçt ünvanınız"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" className="newsletter__btn">
          <img src="icons/envelope.svg" alt="" />
          GET THIS NEWSLETTER
        </button>
      </form>

      {message && <p className="newsletter__message">{message}</p>}
    </section>
  );
}

export default NewsletterSignup;
