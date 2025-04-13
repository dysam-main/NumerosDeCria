import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ArticlesPage from "./pages/ArticlesPage"
import ArticlePage from "./pages/ArticlePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:slug" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
