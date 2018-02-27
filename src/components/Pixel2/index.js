import React from 'react'
import image from './google_pixel_2_just_black.png'
import Device from '../Device'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const Pixel2 = ({ children }) => (
  <Device
    className="pixel-2"
    src={image}
    alt="Google Pixel Preview"
  >
    {children}
  </Device>
)

Pixel2.propTypes = propTypes
Pixel2.defaultProps = defaultProps

export default Pixel2
