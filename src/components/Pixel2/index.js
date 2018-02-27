import React from 'react'
import PropTypes from 'prop-types'
import withCarousel from '../../utils/withCarousel'
import image from './google_pixel_2_just_black.png'
import Device from '../Device'
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

Pixel2.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(Pixel2)
