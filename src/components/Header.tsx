"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/articles" className="flex items-center gap-2">
          <span className="text-xl font-bold">Knowledge Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <div className="hidden md:flex gap-6">
            <Link to="/articles" className="text-sm font-medium hover:underline underline-offset-4">
              Articles
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-transparent hover:bg-gray-100"
          >
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
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 z-50 w-full bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <Link to="/articles" className="flex items-center gap-2">
              <span className="text-xl font-bold">Knowledge Hub</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="rounded-md p-2 hover:bg-gray-100">
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
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="grid gap-6 text-lg font-medium">
            <Link to="/articles" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Articles
            </Link>
            <Link to="#" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="#" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
