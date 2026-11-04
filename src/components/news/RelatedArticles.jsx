import { Link } from "react-router-dom";
import CardActions from "../CardActions.jsx";
import { getArticleById, getArticlesByIds } from "../../lib/mockData.js";

function RelatedArticles({ article, variant = "bottom" }) {
  if (variant === "side") {
    const recommended = getArticlesByIds(article.recommendedIds)
      .filter((item) => item.id !== article.id)
      .slice(0, 3);
    const basedOnLike = getArticleById(article.basedOnLikeId);

    return (
      <div className="side-related">
        <h3 className="side-related__title">Recommended for you</h3>
        {recommended.map((item) => (
          <SideCard key={item.id} story={item} />
        ))}

        {basedOnLike && basedOnLike.id !== article.id && (
          <>
            <h3 className="side-related__title">Based on Like</h3>
            <SideCard story={basedOnLike} />
          </>
        )}
      </div>
    );
  }

  const related = getArticlesByIds(article.relatedIds).filter(
    (item) => item.id !== article.id,
  );

  return (
    <section className="related-topics">
      <h2 className="related-topics__title">Related Topics</h2>

      <div className="related-track">
        {related.map((item) => (
          <article key={item.id} className="related-card">
            <Link to={`/news/${item.id}`} className="related-card__image">
              <img src={item.image} alt={item.title} />
            </Link>
            <h3 className="related-card__title">
              <Link to={`/news/${item.id}`}>{item.title}</Link>
            </h3>
            <div className="related-card__footer">
              <CardActions story={item} color="dark" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SideCard({ story }) {
  return (
    <Link to={`/news/${story.id}`} className="side-card">
      <img src={story.image} alt={story.title} />
      <p className="side-card__title">{story.title}</p>
    </Link>
  );
}

export default RelatedArticles;
