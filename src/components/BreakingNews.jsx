import { breakingNews } from "../lib/mockData.js";

function BreakingNews() {
  return (
    <div className="breaking">
      <div className="breaking__inner">
        <span className="breaking__label">{breakingNews.label}</span>
        <div className="breaking__ticker">
          <p className="breaking__text">{breakingNews.text}</p>
        </div>
      </div>
    </div>
  );
}

export default BreakingNews;
