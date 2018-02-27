import React from 'react'
import PropTypes from 'prop-types'
import withCarousel from '../../utils/withCarousel'
import Device from '../Device'
import image from './apple_ipad_air_2_space_gray.png'
import './style.css'

const IPad = ({ children }) => (
  <Device
    className="ipad"
    src={image}
    alt="IPad Preview"
  >
    {children}
  </Device>
)

IPad.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(IPad)
