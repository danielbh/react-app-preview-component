import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_iphone_x_space_grey.png'
import './style.css'

const IPhoneX = ({ children }) => (
  <div className="container">
    <div className="device">
      <img src={image} alt="iPhone X Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


IPhoneX.propTypes = {
  children: PropTypes.element.isRequired
}

export default IPhoneX
