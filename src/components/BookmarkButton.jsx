import useBookmark from "../hooks/useBookmark.js";

function BookmarkButton({ id, color = "dark" }) {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const saved = isBookmarked(id);

  return (
    <button
      className="action-btn"
      onClick={() => toggleBookmark(id)}
      aria-label="Yadda saxla"
      aria-pressed={saved}
    >
      <img
        src={
          saved ? "icons/bookmark-filled.svg" : `icons/bookmark-${color}.svg`
        }
        alt=""
      />
    </button>
  );
}

export default BookmarkButton;
