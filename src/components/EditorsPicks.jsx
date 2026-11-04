import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { editorPicks } from "../lib/mockData.js";
import CardActions from "./CardActions.jsx";
import Tag from "./Tag.jsx";

// 800px-dən böyük ekranda bir səhifədə 2 kart, kiçik ekranda 1 kart (CSS ilə eyni hüdud)
const DESKTOP_QUERY = "(min-width: 800px)";

// Brauzerdə ekran böyükdürsə true qaytarır
function isDesktop() {
  return (
    typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches
  );
}

function EditorsPicks() {
  const [desktop, setDesktop] = useState(isDesktop);
  const [page, setPage] = useState(0);

  // Ekran ölçüsü dəyişəndə səhifə sayını yenidən hesabla
  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const handleChange = () => {
      setDesktop(media.matches);
      setPage(0);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Kartları qruplaşdırırıq: desktopda [[1,2]], mobildə [[1],[2]]
  const perPage = desktop ? 2 : 1;
  const pages = [];
  for (let i = 0; i < editorPicks.length; i += perPage) {
    pages.push(editorPicks.slice(i, i + perPage));
  }

  return (
    <section className="picks">
      <h2 className="picks__header">
        <span>Editor’s Picks</span>
        <img src="icons/star.svg" alt="" />
      </h2>

      {/* Viewport: yalnız bir səhifə görünür, qalanı gizlənir */}
      <div className="picks__viewport">
        <div
          className="picks__track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, pageIndex) => (
            <div key={pageIndex} className="picks__page">
              {group.map((pick) => (
                <article key={pick.id} className="pick">
                  <div className="pick__image">
                    <Link to={`/news/${pick.id}`}>
                      <img src={pick.image} alt={pick.title} />
                    </Link>
                    {pick.tag && <Tag label={pick.tag} />}
                    <div className="pick__actions">
                      <CardActions story={pick} color="white" />
                    </div>
                  </div>

                  <div className="pick__body">
                    <h3>
                      <Link to={`/news/${pick.id}`}>{pick.title}</Link>
                    </h3>
                    <p>{pick.description}</p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Nöqtələr yalnız bir neçə səhifə olanda göstərilir */}
      {pages.length > 1 && (
        <div className="dots">
          {pages.map((_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              onClick={() => setPage(pageIndex)}
              aria-label={`${pageIndex + 1}-ci səhifə`}
            >
              <img
                src={
                  pageIndex === page
                    ? "icons/pagination-active.svg"
                    : "icons/pagination-inactive.svg"
                }
                alt=""
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default EditorsPicks;
