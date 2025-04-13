import React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Header } from "../../../components/header"
import { getArticleBySlug } from "../../../lib/data"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container max-w-3xl px-4 py-12 md:px-6 md:py-24">
          {/* Summary Section */}
          <section className="mb-12">
            <Link href="/articles" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{article.title}</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">{article.summary}</p>
            {/* <div className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div> */}
          </section>

          {/* Main Article Section */}
          <section className="prose prose-gray max-w-none dark:prose-invert mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </section>

          {/* Download Section */}
          <section className="rounded-lg border bg-card p-6 shadow-sm" style={{ display: "flex", justifyContent: "space-evenly",margin:"0px" }}>
            {/* <h2 className="text-xl font-semibold mb-4">Descargar Publicación</h2> */}
            {/* <p className="text-gray-500 dark:text-gray-400 mb-4">
              Want to read this article offline or share it with others? Download the PDF version.
            </p> */}
            <Button asChild>
              <Link href={article.downloadUrl}>
                <Download className="mr-2 h-4 w-4" />
                {article.slug}
              </Link>
            </Button>
            {article.downloadUrl2 && (
              <Button asChild>
                <Link href={article.downloadUrl2}>
                  <Download className="mr-2 h-4 w-4" />
                  {article.download2}
                </Link>
              </Button>
            )}
          </section>
        </article>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
