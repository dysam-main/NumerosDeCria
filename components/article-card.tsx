import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Article } from "../lib/data"

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
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{article.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{article.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/articles/${article.slug}`}>
            Leer <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
