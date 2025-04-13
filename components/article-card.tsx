import React from "react"
import Link from "next/link"
import Image from "next/image"
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
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{article.title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{article.summary}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={`/articles/${article.slug}`}>
            Leer y Descargar<ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
