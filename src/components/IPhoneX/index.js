import React from 'react'
import image from './apple_iphone_x_space_grey.png'
import { defaultProps, propTypes } from '../../utils/props'
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

IPhoneX.propTypes = propTypes
IPhoneX.defaultProps = defaultProps

export default IPhoneX
