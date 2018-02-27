import React from 'react'
import PropTypes from 'prop-types'
import withCarousel from '../../utils/withCarousel'
import image from './apple_macbook_pro_13.png'
import Device from '../Device'
import './style.css'

const MacbookPro = ({ children }) => (
  <Device
    className="macbook-pro"
    src={image}
    alt="Macbook Pro Preview"
  >
    {children}
  </Device>
)

MacbookPro.propTypes = {
  children: PropTypes.element.isRequired
}

export default withCarousel(MacbookPro)
