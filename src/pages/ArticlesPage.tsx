import { Header } from "../components/Header"
import { ArticleCard } from "../components/ArticleCard"
import { articles } from "../data/articles"
import "./ArticlesPage.css"

export default function ArticlesPage() {
  return (
    <div className="articles-page">
      <Header />
      <main className="articles-main">
        <section className="articles-section">
          <div className="container">
            {/* <div className="articles-header">
              <div className="articles-header-content">
                <h1 className="articles-title">Articles</h1>
                <p className="articles-description">Explore our collection of insightful articles on various topics.</p>
              </div>
            </div> */}
            <div className="articles-grid">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-text">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
