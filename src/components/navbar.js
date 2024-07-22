import React from 'react'
import numerosdecria from '../files/libro/LosNumerosDeLaCria.pdf'
import manual from '../files/manual/ManualDeUso.pdf'
import planillas from '../files/manual/PlanillasDeTrabajo.zip'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links">
            <span className="thq-body-small thq-link">{props.link1}</span>
            <a href={numerosdecria} target="_blank" rel="noopener noreferrer" download="LosNumerosDeLaCria.pdf">
              <span className="thq-body-small thq-link">{props.link2}</span>
            </a>
            <a href={manual} target="_blank" rel="noopener noreferrer" download="ManualDeUso.pdf">
              <span className="thq-body-small thq-link">{props.link3}</span>
            </a>
            <a href={planillas} target="_blank" rel="noopener noreferrer" download="PlanillasDeTrabajo.zip">
              <span className="thq-body-small thq-link">{props.link4}</span>
            </a>
            {/* <span className="thq-body-small thq-link">{props.link5}</span> */}
          </nav>
          {/* <div className="navbar-buttons">
            <button className="navbar-action1 thq-button-animated thq-button-filled">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar-action2 thq-button-animated thq-button-outline">
              <span className="thq-body-small">Action 2</span>
            </button>
          </div> */}
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links1">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              {/* <span className="thq-body-small thq-link">{props.link5}</span> */}
            </nav>
          </div>
          {/* <div className="navbar-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div> */}
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  link1: 'Inicio',
  link4: 'Planillas',
  action1: '/home',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link2: 'Libro',
  link5: 'Link5',
  link3: 'Apendice',
  action2: '/book',
  logoAlt: 'Evaluación de Costos de Cría',
}

Navbar.propTypes = {
  link1: PropTypes.string,
  link4: PropTypes.string,
  action1: PropTypes.string,
  logoSrc: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  link3: PropTypes.string,
  action2: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Navbar
