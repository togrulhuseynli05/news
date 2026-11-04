function ArticleHero({ article }) {
  return (
    <section className="article-hero">
      <div className="article-hero__band">
        <div className="container">
          <h1 className="article-hero__title">{article.title}</h1>
        </div>
      </div>

      <div className="article-hero__body">
        <figure className="article-hero__figure">
          <img src={article.heroImage || article.image} alt={article.title} />
        </figure>

        <div className="article-meta">
          <span>{article.time}</span>
          <span>
            By {article.author} | {article.readTime}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ArticleHero;
