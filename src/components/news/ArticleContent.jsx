function ArticleContent({ blocks }) {
  return (
    <div className="article-content">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2 key={index} className="article-content__heading">
              {block.text}
            </h2>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="article-content__figure">
              <img src={block.src} alt={block.caption} />
              <figcaption>
                {block.caption}
                {block.source && (
                  <span className="article-content__source">
                    {" "}
                    {block.source}
                  </span>
                )}
              </figcaption>
            </figure>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={index} className="article-content__quote">
              <p>“{block.text}”</p>
              <cite>{block.author}</cite>
            </blockquote>
          );
        }

        return (
          <p key={index} className="article-content__text">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export default ArticleContent;
