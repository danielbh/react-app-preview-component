import React, { Component } from 'react'
import PropTypes from 'prop-types'

const withCarousel = Device => (
  class Carousel extends Component {

    static defaultProps = {
      carousel: false,
      changeOnClick: true,
      interval: 2000,
    }

    static propTypes = {
      children: PropTypes.element.isRequired,
      carousel: PropTypes.boolean,
      changeOnClick: PropTypes.boolean,
      interval: PropTypes.float,
    }

    state = {
      currentSlideIdx: 0
    }

    render() {
      const children = this.props.children.length ?
        this.props.children[this.state.currentSlideIdx] :
        this.props.children

      return (
        <Device>
            {children}
        </Device>
      )
    }
  }
)

export default withCarousel
