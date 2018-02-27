import React from 'react'
import image from './apple_iphone_8_space_grey.png'
import { defaultProps, propTypes } from '../../utils/props'
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

IPhone8.propTypes = propTypes
IPhone8.defaultProps = defaultProps

export default IPhone8
