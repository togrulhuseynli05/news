function AuthorCard({ author }) {
  const initials = author.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <section className="author-card">
      <div className="author-card__avatar">
        {author.avatar ? (
          <img src={author.avatar} alt={author.name} />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <div className="author-card__info">
        <p className="author-card__label">Author</p>
        <h3 className="author-card__name">{author.name}</h3>
        <p className="author-card__bio">{author.bio}</p>
      </div>

      <button type="button" className="follow-btn">
        <img src="icons/twitter-red.svg" alt="" />
        FOLLOW
      </button>
    </section>
  );
}

export default AuthorCard;
