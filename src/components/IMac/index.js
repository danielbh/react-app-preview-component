import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_imac.png'
import Device from '../Device'
import withCarousel from '../../utils/withCarousel'
import './style.css'

const IMac = ({ children }) => (
  <Device
    className="imac"
    src={image}
    alt="iPhone X Preview"
  >
    {children}
  </Device>
)

IMac.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(IMac)
