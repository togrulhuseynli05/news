import { Link } from "react-router-dom";
import { heroStory } from "../lib/mockData.js";
import CardActions from "./CardActions.jsx";

function HeroSection() {
  const articleLink = `/news/${heroStory.id}`;

  return (
    <section className="hero">
      <div className="hero__image">
        <Link to={articleLink}>
          <img src={heroStory.image} alt={heroStory.title} />
        </Link>
      </div>

      <div className="hero__content">
        <div className="hero__top">
          <span className="hero__label">{heroStory.label}</span>
          <CardActions story={heroStory} color="dark" />
        </div>

        <h1 className="hero__title">
          <Link to={articleLink}>{heroStory.title}</Link>
        </h1>
        <p className="hero__desc">{heroStory.description}</p>

        <div className="meta">
          <span>{heroStory.time}</span>
          <span>
            By {heroStory.author} | {heroStory.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
