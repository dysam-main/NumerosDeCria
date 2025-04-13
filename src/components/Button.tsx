import type React from "react"
import "./Button.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "default" | "small" | "large"
  children: React.ReactNode
  asChild?: boolean
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  asChild = false,
  ...props
}: ButtonProps) {
  const buttonClass = `button button-${variant} button-${size} ${className}`

  if (asChild) {
    return <div className={buttonClass}>{children}</div>
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
