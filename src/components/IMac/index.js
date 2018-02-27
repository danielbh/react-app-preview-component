import React from 'react'
import image from './apple_imac.png'
import Device from '../Device'
import { defaultProps, propTypes } from '../../utils/props'
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

IMac.propTypes = propTypes
IMac.defaultProps = defaultProps

export default IMac
