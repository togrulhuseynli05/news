import { Link } from "react-router-dom";
import CardActions from "./CardActions.jsx";
import Tag from "./Tag.jsx";

function NewsCard({ story }) {
  const articleLink = `/news/${story.id}`;

  return (
    <article className="news-card">
      <div className="news-card__image">
        <Link to={articleLink}>
          <img src={story.image} alt={story.title} />
        </Link>
        {story.tag && <Tag label={story.tag} />}
      </div>

      <div className="news-card__content">
        <div className="news-card__body">
          <h3 className="news-card__title">
            <Link to={articleLink}>{story.title}</Link>
          </h3>
          <p className="news-card__desc">{story.description}</p>
          <div className="meta">
            <span>{story.time}</span>
            <span>
              By {story.author} | {story.readTime}
            </span>
          </div>
        </div>

        <div className="news-card__footer">
          <CardActions story={story} color="dark" />
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
