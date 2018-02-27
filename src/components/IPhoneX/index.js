import React from 'react'
import image from './apple_iphone_x_space_grey.png'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const IPhoneX = ({ children }) => (
  <div className="container">
    <div className="iphoneX">
      <img src={image} alt="iPhone X Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


IPhoneX.propTypes = propTypes
IPhoneX.defaultProps = defaultProps

export default IPhoneX
