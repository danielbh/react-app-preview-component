import React from 'react'
import image from './google_pixel_2_just_black.png'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const Pixel2 = ({ children }) => (
  <div className="container">
    <div className="pixel-2">
      <img src={image} alt="Google Pixel Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


Pixel2.propTypes = propTypes
Pixel2.defaultProps = defaultProps

export default Pixel2
