import React, { useState } from 'react'
import PropTypes from 'prop-types'
import numerosdecria from '../files/libro/LosNumerosDeLaCria.pdf'
import manual from '../files/manual/ManualDeUso.pdf'
import planillas from '../files/manual/PlanillasDeTrabajo.zip'

import './features1.css'

const Features1 = (props) => {
  const handleDownload = (content, fileName) => {
    // Crear un objeto Blob a partir del contenido
    const blob = new Blob([content], { type: 'text/plain' });
    
    // Crear una URL para el Blob
    const url = URL.createObjectURL(blob);
    
    // Crear un elemento <a> invisible para iniciar la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName; // Nombre del archivo a descargar
    document.body.appendChild(a);
    
    // Hacer clic en el elemento <a> para iniciar la descarga
    a.click();
    
    // Limpiar la URL creada para el Blob
    URL.revokeObjectURL(url);
    
    // Eliminar el elemento <a> del DOM
    document.body.removeChild(a);
    };
  return (
    <div className="thq-section-padding">
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          <img
                alt="Caratula"
                src='./img/Caratula.jpg'
                className="features1-image thq-img-ratio-16-9"
              />
        </div>
        <div className="features1-tabs-menu">
          <div className="features1-tab-horizontal">
            <div className="features1-content">
            <a href={numerosdecria} target="_blank" rel="noopener noreferrer" download="LosNumerosDeLaCria.pdf">
                <h2 className="thq-heading-2">{props.feature1Title}</h2>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
            </a>
            </div>
          </div>
          <div className="features1-tab-horizontal1">
            <div className="features1-content1">
            <a href={manual} target="_blank" rel="noopener noreferrer" download="ManualDeUso.pdf">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </a>
            </div>
          </div>
          <div
            className="features1-tab-horizontal2">
            <div className="features1-content2">
            <a href={planillas} target="_blank" rel="noopener noreferrer" download="PlanillasDeTrabajo.zip">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3Title: 'Planillas de Trabajo',
  feature1Title: 'Libro',
  feature3ImgAlt: 'Cost Evaluation Worksheets Image',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDM5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Descargue los Archivos de trabajo',
  feature1ImgAlt: 'Livestock Production Cost Evaluation Worksheet',
  feature1Description:
    'Descargue el libro completo',
  feature2ImgAlt: 'Detailed Instructions Image',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1481261224858-2e88a19fc36c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDQwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Apéndice',
  feature2Description: 'Descargue las Instrucciones paso a paso para el uso de las planillas de trabajo',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDQwMHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features1.propTypes = {
  feature3Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
}

export default Features1
