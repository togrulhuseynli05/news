import CardActions from "../CardActions.jsx";

function ArticleTags({ tags, article }) {
  return (
    <div className="article-tags">
      <div className="tag-pills">
        {tags.map((tag) => (
          <button key={tag} type="button" className="tag-pill">
            {tag}
          </button>
        ))}
      </div>

      <div className="article-bar">
        <CardActions story={article} color="dark" />
        <span className="article-bar__responses">
          {article.comments} responses
        </span>
      </div>
    </div>
  );
}

export default ArticleTags;
