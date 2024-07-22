import React from 'react'

import { Helmet } from 'react-helmet'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found1-container">
      <Helmet>
        <title>¡No por acá!</title>
      </Helmet>
      <h3>Página no encontrada</h3>
      <div className="not-found1-container1">
        <h1 className="not-found1-text1">404</h1>
      </div>
      <div className="not-found1-container2">
        <h2 className="not-found1-text2">
          Lo sentimos, pero la página solicitada no existe
        </h2>
      </div>
    </div>
  )
}

export default NotFound
