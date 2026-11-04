import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ArticleHero from "../components/news/ArticleHero.jsx";
import StickyActions from "../components/news/StickyActions.jsx";
import ArticleContent from "../components/news/ArticleContent.jsx";
import NewsletterSignup from "../components/news/NewsletterSignup.jsx";
import ArticleTags from "../components/news/ArticleTags.jsx";
import AuthorCard from "../components/news/AuthorCard.jsx";
import RelatedArticles from "../components/news/RelatedArticles.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { getArticleById } from "../lib/mockData.js";

//URL-dəki id-yə görə xəbəri tapır
function ArticlePage() {
  const { id } = useParams();
  const article = getArticleById(id);

  if (!article) {
    return <NotFoundPage />;
  }

  // key={article.id}: başqa xəbərə keçəndə bütün komponentlər təmiz başlayır
  return <ArticleView key={article.id} article={article} />;
}

function ArticleView({ article }) {
  return (
    <>
      <Navbar />

      <ArticleHero article={article} />

      <div className="article-layout">
        <StickyActions article={article} />

        <div className="article-main">
          <ArticleContent blocks={article.content} />
          <NewsletterSignup authorName={article.authorProfile.name} />
          <ArticleTags tags={article.tags} article={article} />
          <AuthorCard author={article.authorProfile} />
        </div>

        <aside className="article-side">
          <RelatedArticles article={article} variant="side" />
        </aside>
      </div>

      <div className="container">
        <RelatedArticles article={article} variant="bottom" />
      </div>

      <Footer />
    </>
  );
}

export default ArticlePage;
