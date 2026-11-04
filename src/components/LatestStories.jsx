import { useState } from "react";
import NewsCard from "./NewsCard.jsx";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";
import { latestStories } from "../lib/mockData.js";

// VIEW MORE hazırda İŞLƏMİR (düymə görünür, amma deaktivdir).
// API gələndə bunu true edin: düymə və scroll ilə yükləmə aktiv olacaq.
const LOAD_MORE_ENABLED = false;

// Think və Health üçün məlumat hələ yoxdur. API gələndə bu massivləri doldurun.
const EMPTY = [];

const tabs = [
  { id: "latest", label: "Latest Stories", items: latestStories },
  { id: "think", label: "Think", items: EMPTY },
  { id: "health", label: "Health", items: EMPTY },
];

function LatestStories() {
  const [activeTab, setActiveTab] = useState("latest");
  const [view, setView] = useState("grid"); // 'grid' və ya 'list'

  const currentTab = tabs.find((tab) => tab.id === activeTab);
  const { visibleItems, hasMore, isLoading, loadMore } = useInfiniteScroll(
    currentTab.items,
    { enabled: LOAD_MORE_ENABLED },
  );

  const showButton =
    currentTab.items.length > 0 && (!LOAD_MORE_ENABLED || hasMore);

  return (
    <section className="latest">
      <div className="latest__header">
        <div className="latest__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`latest__tab ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="view-toggle">
          <button
            className={`view-btn ${view === "list" ? "is-active" : ""}`}
            onClick={() => setView("list")}
            aria-label="Siyahı görünüşü"
          >
            <img src="icons/list-view.svg" alt="" />
          </button>
          <button
            className={`view-btn ${view === "grid" ? "is-active" : ""}`}
            onClick={() => setView("grid")}
            aria-label="Grid görünüşü"
          >
            <img src="icons/grid-view.svg" alt="" />
          </button>
        </div>
      </div>

      <div className={`news-grid news-grid--${view}`}>
        {visibleItems.map((story) => (
          <NewsCard key={story.id} story={story} />
        ))}
      </div>

      {/* Bu tabda məlumat yoxdursa */}
      {visibleItems.length === 0 && (
        <p className="latest__empty">Bu bölmə üçün hələ xəbər yoxdur.</p>
      )}

      {showButton && (
        <div className="view-more">
          <button
            className="view-more__btn"
            onClick={loadMore}
            disabled={!LOAD_MORE_ENABLED || isLoading}
          >
            {isLoading ? "LOADING..." : "VIEW MORE"}
          </button>
        </div>
      )}
    </section>
  );
}

export default LatestStories;
