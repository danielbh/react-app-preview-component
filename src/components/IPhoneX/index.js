import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_iphone_x_space_grey.png'
import withCarousel from '../../utils/withCarousel'
import Device from '../Device'
import './style.css'

const IPhoneX = ({ children }) => (
  <Device
    className="iphoneX"
    src={image}
    alt="iPhone X Preview"
  >
    {children}
  </Device>
)

IPhoneX.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(IPhoneX)
