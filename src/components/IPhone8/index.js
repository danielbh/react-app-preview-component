import React from 'react'
import PropTypes from 'prop-types'
import withCarousel from '../../utils/withCarousel'
import image from './apple_iphone_8_space_grey.png'
import Device from '../Device'
import './style.css'

const IPhone8 = ({ children }) => (
  <Device
    className="iphone8"
    src={image}
    alt="iPhone 8 Preview"
  >
    {children}
  </Device>
)

IPhone8.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(IPhone8)
