import React from 'react'
import image from './apple_macbook_pro_13.png'
import { defaultProps, propTypes } from '../../utils/props'
import Device from '../Device'
import './style.css'

const MacbookPro = ({ children }) => (
  <Device
    className="macbook-pro"
    src={image}
    alt="Macbook Pro Preview"
  >
    {children}
  </Device>
)

MacbookPro.propTypes = propTypes
MacbookPro.defaultProps = defaultProps

export default MacbookPro
