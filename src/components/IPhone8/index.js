import React from 'react'
import image from './apple_iphone_8_space_grey.png'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const IPhone8 = ({ children }) => (
  <div className="container">
    <div className="iphone8">
      <img src={image} alt="iPhone 8 Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)

IPhone8.propTypes = propTypes
IPhone8.defaultProps = defaultProps

export default IPhone8
