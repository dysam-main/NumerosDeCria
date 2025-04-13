import type React from "react"
import "./Card.css"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = "", children }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`card-header ${className}`}>{children}</div>
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`card-content ${className}`}>{children}</div>
}

export function CardFooter({ className = "", children }: CardProps) {
  return <div className={`card-footer ${className}`}>{children}</div>
}
