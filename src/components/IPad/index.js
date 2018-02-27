import React from 'react'
import { defaultProps, propTypes } from '../../utils/props'
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


IPad.propTypes = propTypes
IPad.defaultProps = defaultProps

export default IPad
