import React from 'react'
import PropTypes from 'prop-types'
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


IPad.propTypes = {
  children: PropTypes.element.isRequired
}

export default IPad
