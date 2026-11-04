import { useState } from "react";
import { Link } from "react-router-dom";
import { liveStory } from "../lib/mockData.js";

function SidePanel() {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState("");
  const liveLink = `news/${liveStory.id}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = location.trim();
    if (!value) return;

    setResult(`“${value}” üçün xəbərlər (mock data)`);
    setLocation("");
  };

  return (
    <aside className="side">
      <div className="live">
        <div className="live__header">
          <span>Live</span>
          <span className="live__dot" />
        </div>
        <Link to={liveLink}>
          <img
            className="live__image"
            src={liveStory.image}
            alt={liveStory.title}
          />
        </Link>
        <p className="live__title">
          <Link to={liveLink}>{liveStory.title}</Link>
        </p>
      </div>

      <div className="location">
        <h3>Location News</h3>
        <form className="location__box" onSubmit={handleSubmit}>
          <p>Get Location specific News</p>
          <input
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
          <button type="submit" className="btn-red">
            SUBMIT
          </button>
          <p className="location__result">{result}</p>
        </form>
      </div>
    </aside>
  );
}

export default SidePanel;
