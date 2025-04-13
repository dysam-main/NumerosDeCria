"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/articles" className="logo">
          <span>Números de la Cría</span>
        </Link>
        <nav className="nav">
          <div className="desktop-nav">
            <Link to="/articles" className="nav-link">
              Publicaciones
            </Link>
            {/* <Link to="#" className="nav-link">
              Categories
            </Link>
            <Link to="#" className="nav-link">
              About
            </Link> */}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button" aria-label="Toggle menu">
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
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link to="/articles" className="logo" onClick={() => setIsMenuOpen(false)}>
              <span>Números de la Cría</span>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="close-button" aria-label="Close menu">
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
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <nav className="mobile-nav">
            <Link to="/articles" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Publicaciones
            </Link>
            {/* <Link to="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Categories
            </Link>
            <Link to="#" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  )
}
