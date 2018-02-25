import React from 'react'
import PropTypes from 'prop-types'
import image from './apple_imac.png'
import './style.css'

const IMac = ({ children }) => (
  <div className="container">
    <div className="imac">
      <img src={image} alt="iPhone X Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


IMac.propTypes = {
  children: PropTypes.element.isRequired
}

export default IMac
