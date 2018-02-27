import React from 'react'
import image from './apple_imac.png'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const IMac = ({ children }) => (
  <div className="container">
    <div className="imac">
      <img src={image} alt="iPhone X Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


IMac.propTypes = propTypes
IMac.defaultProps = defaultProps

export default IMac
