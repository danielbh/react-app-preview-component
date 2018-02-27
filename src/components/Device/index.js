import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Device = ({
  className,
  src,
  alt,
  children
}) => (
  <div className="container">
    <div className={className}>
      <img src={src} alt={alt} />
      <div className="content">
        {children}
      </div>
    </div>
  </div>
)

Device.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Device
