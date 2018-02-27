import React from 'react'
import image from './apple_macbook_pro_13.png'
import { defaultProps, propTypes } from '../../utils/props'
import './style.css'

const MacbookPro = ({ children }) => (
  <div className="container">
    <div className="macbook-pro">
      <img src={image} alt="Macbook Pro Preview" />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)


MacbookPro.propTypes = propTypes
MacbookPro.defaultProps = defaultProps

export default MacbookPro
