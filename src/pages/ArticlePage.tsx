"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { getArticleBySlug } from "../data/articles"
import "./ArticlePage.css"

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug || "")

  if (!article) {
    return (
      <div className="article-not-found">
        <Header />
        <main className="not-found-main">
          <div className="not-found-content">
            <h1 className="not-found-title">No Encontrado</h1>
            <p className="not-found-message">La publicación buscada no existe</p>
            <Button asChild>
              <Link to="/articles">Vovler</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="article-page">
      <Header />
      <main className="article-main">
        <article className="article-container">
          {/* Summary Section */}
          <section className="article-summary-section">
            <Link to="/articles" className="back-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="back-icon"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Volver
            </Link>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-summary">{article.summary}</p>
            {/* <div className="article-meta">
              Published on{" "}
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div> */}
          </section>

          {/* Main Article Section */}
          <section className="article-content-section">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          </section>

          {/* Download Section */}
          <section className="article-download-section">
            <Button asChild>
              <a href={article.downloadUrl} className="download-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="download-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {article.slug}
              </a>
            </Button>
            {article.downloadUrl2 ? (             
            <Button asChild>
              <a href={article.downloadUrl2} className="download-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="download-icon"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {article.download2}
              </a>
            </Button> 
            ) : null}

          </section>
        </article>
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-text">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
