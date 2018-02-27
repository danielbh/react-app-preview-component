import React from 'react'
import { defaultProps, propTypes } from '../../utils/props'
import image from './apple_ipad_air_2_space_gray.png'
import './style.css'

const IPad = ({ children }) => (
  <div className="container">
    <div className="ipad">
      <img src={image} alt="iPad Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


IPad.propTypes = propTypes
IPad.defaultProps = defaultProps

export default IPad
