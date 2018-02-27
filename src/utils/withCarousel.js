import React, { Component } from 'react'
import PropTypes from 'prop-types'

const withCarousel = Device => {
  return class Carousel extends Component {

    state = {
      currentSlideIdx: 0
    }

    static propTypes = {
      children:
        PropTypes.oneOfType([
          PropTypes.element,
          PropTypes.array])
        .isRequired,
      carousel: PropTypes.bool,
      changeOnClick: PropTypes.bool,
      interval: PropTypes.number,
    }

    static defaultProps = {
      carousel: false,
      changeOnClick: true,
      interval: 2000,
    }

    componentDidMount() {
      const { children, carousel, interval } = this.props
      if (carousel) {
        const getNextSlide = () => {
          const { currentSlideIdx } = this.state
          return children.length - 1 === currentSlideIdx ? 0 : currentSlideIdx + 1
        }

        this.interval = setInterval(() => {
          this.setState({
            currentSlideIdx: getNextSlide()
          })
        }, interval)
      }
    }

    componentWillUnmount() {
      clearInterval(this.intervalId)
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
}

export default withCarousel
