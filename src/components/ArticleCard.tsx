import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "./Card"
import { Button } from "./Button"
import type { Article } from "../data/articles"
import "./ArticleCard.css"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="article-card">
      <div className="article-image-container">
        <img
          src={article.image || "https://via.placeholder.com/600x400"}
          alt={article.title}
          className="article-image"
        />
      </div>
      <CardHeader>
        <h3 className="article-title">{article.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="article-summary">{article.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="read-more-button">
          <Link to={`/articles/${article.slug}`} className="read-more-link">
            Leer
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
              className="arrow-icon"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
