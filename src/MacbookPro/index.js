import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_macbook_pro_13.png'
import './style.css'

const MacbookPro = ({ children }) => (
  <div className="container">
    <div className="macbook-pro">
      <img src={image} alt="iPhone X Preview" />
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
