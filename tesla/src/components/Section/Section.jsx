import React from 'react'
import './section.css'
import arrowDown from '../../images/down-arrow.svg'
import Bounce from 'react-reveal/Zoom';

const Section = ({titulo, detalle, btn2, btn1, imagen}) => {

  return (
    <div className='section-body' style={{backgroundImage: `url(${imagen})`}} >

        <Bounce>
          <div className='section-info'>
              <h2> {titulo} </h2>
              <p> {detalle} </p>
          </div>
        </Bounce>

        <Bounce>
          <div className='section-botones'>
              <div className='section-botones-1-2'>
                  <button> {btn1} </button>
                  {btn2? <button> {btn2} </button> : ''}
              </div>
              <img src={arrowDown} alt="btn-arrow"/>
          </div>
        </Bounce>

    </div>
  )
}

export default Section