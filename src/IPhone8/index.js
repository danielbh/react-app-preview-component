import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_iphone_8_space_grey.png'
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


IPhone8.propTypes = {
  children: PropTypes.element.isRequired
}

export default IPhone8
