"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { getArticleBySlug } from "../data/articles"

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug || "")

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/articles">Back to Articles</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl px-4 py-12 md:px-6 md:py-24">
          {/* Summary Section */}
          <section className="mb-12">
            <Link to="/articles" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
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
                className="mr-2 h-4 w-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Articles
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{article.title}</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">{article.summary}</p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published on{" "}
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </section>

          {/* Main Article Section */}
          <section className="prose prose-gray max-w-none dark:prose-invert mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </section>

          {/* Download Section */}
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Download this Article</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Want to read this article offline or share it with others? Download the PDF version.
            </p>
            <Button asChild>
              <a href={article.downloadUrl} className="inline-flex items-center">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </Button>
          </section>
        </article>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Your Knowledge Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
