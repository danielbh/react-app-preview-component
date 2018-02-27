import React from 'react'
import PropTypes from 'prop-types'
import image from './google_pixel_2_just_black.png'
import './style.css'

const MacbookPro = ({ children }) => (
  <div className="container">
    <div className="pixel-2">
      <img src={image} alt="Google Pixel Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


MacbookPro.propTypes = {
  children: PropTypes.element.isRequired
}

export default MacbookPro
