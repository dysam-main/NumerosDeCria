import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "./Card"
import { Button } from "./Button"
import type { Article } from "../data/articles"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{article.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{article.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link to={`/articles/${article.slug}`} className="w-full flex items-center justify-center">
            Read More
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
              className="ml-2 h-4 w-4"
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
