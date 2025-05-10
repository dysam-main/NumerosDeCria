import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { LoanSimulator } from "../features/loan-simulator/LoanSimulator"; // Import the simulator
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <main className="landing-main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Los Números de la Cría
                </h1>
                <p className="hero-description">
                Un espacio dedicado a comprender y optimizar la producción bovina a través del análisis económico de las variables biológicas. Este sitio nace como complemento y punto de acceso al libro digital homónimo, orientado a productores, técnicos y estudiantes que buscan tomar decisiones informadas en el manejo de rodeos de cría.
                </p>
              </div>
              <div className="hero-actions">
                <Button asChild size="large">
                  <Link to="/articles" className="hero-button">
                    Ver Publicaciones
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
              </div>
            </div>
          </div>
        </section>
        {/* Loan Simulator Section */}
        <section className="loan-simulator-section py-8 md:py-12"> {/* Added padding */}
          <div className="container">
             <LoanSimulator />
          </div>
        </section>
        {/* <section className="features-section">
          <div className="container">
            <div className="features-grid">
              <div className="features-content">
                <div className="features-badge">Featured Content</div>
                <h2 className="features-title">Expertly Crafted Articles</h2>
                <p className="features-description">
                  Our team of writers and researchers bring you the latest insights and deep dives into fascinating
                  topics.
                </p>
              </div>
              <div className="features-list-container">
                <ul className="features-list">
                  <li className="feature-item">
                    <div className="feature-icon">
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                    <span>In-depth analysis on current trends</span>
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon">
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                    <span>Practical guides and tutorials</span>
                  </li>
                  <li className="feature-item">
                    <div className="feature-icon">
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                    <span>Thought-provoking opinion pieces</span>
                  </li>
                </ul>
                <div className="features-action">
                  <Button asChild variant="outline" size="large">
                    <Link to="/articles" className="features-button">
                      View All Articles
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
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-text">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
