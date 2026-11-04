import { useState } from "react";
import BookmarkButton from "../BookmarkButton.jsx";

function StickyActions({ article }) {
  const [liked, setLiked] = useState(false);
  const likeCount = liked ? article.likes + 1 : article.likes;

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link kopyalandı!"))
      .catch(() => alert("Link kopyalana bilmədi."));
  };

  return (
    <aside className="sticky-actions">
      <p className="sticky-actions__label">See more like this?</p>

      <div className="sticky-actions__dots">
        <span className="dot dot--green" />
        <span className="dot-sep">|</span>
        <span className="dot dot--orange" />
      </div>

      <div className="sticky-actions__list">
        <button
          type="button"
          className="sticky-btn"
          onClick={() => setLiked(!liked)}
          aria-label="Bəyən"
          aria-pressed={liked}
        >
          <img
            src={liked ? "icons/heart-filled.svg" : "icons/heart-dark.svg"}
            alt=""
          />
          <span>{likeCount}</span>
        </button>

        <button type="button" className="sticky-btn" aria-label="Şərhlər">
          <img src="icons/comment.svg" alt="" />
          <span>{article.comments}</span>
        </button>

        <button
          type="button"
          className="sticky-btn"
          aria-label="Paylaş"
          onClick={handleShare}
        >
          <img src="icons/share-dark.svg" alt="" />
        </button>

        <BookmarkButton id={article.id} color="dark" />
      </div>
    </aside>
  );
}

export default StickyActions;
