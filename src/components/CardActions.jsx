import { useState } from "react";
import BookmarkButton from "./BookmarkButton.jsx";

function CardActions({ story, color = "dark" }) {
  const [liked, setLiked] = useState(false);

  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link kopyalandı!"))
      .catch(() => alert("Link kopyalana bilmədi."));
  };

  return (
    <div className={`card-actions card-actions--${color}`}>
      <button
        className="action-btn"
        onClick={() => setLiked(!liked)}
        aria-label="Bəyən"
        aria-pressed={liked}
      >
        <img
          src={liked ? "icons/heart-filled.svg" : `icons/heart-${color}.svg`}
          alt=""
        />
        <span>{liked ? story.likes + 1 : story.likes}</span>
      </button>

      <button className="action-btn" onClick={handleShare} aria-label="Paylaş">
        <img src={`icons/share-${color}.svg`} alt="" />
        <span>{story.shares}</span>
      </button>

      <BookmarkButton id={story.id} color={color} />
    </div>
  );
}

export default CardActions;
