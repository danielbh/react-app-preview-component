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
      changeOnClick: false,
      interval: 2000,
    }

    constructor() {
      super()
      this.getNextSlide = this.getNextSlide.bind(this)
    }

    getNextSlide() {
      const { currentSlideIdx } = this.state
      const nextSlideIdx =
        this.props.children.length - 1 === currentSlideIdx ?
          0 :
          currentSlideIdx + 1
      this.setState({ currentSlideIdx: nextSlideIdx })
    }

    componentDidMount() {
      const {
        children,
        carousel,
        interval,
        changeOnClick
      } = this.props

      if (carousel && !changeOnClick)
        this.intervalId = setInterval(this.getNextSlide, interval)
    }

    componentWillUnmount() {
      this.intervalId && clearInterval(this.intervalId)
    }

    render() {

      const { children, changeOnClick } = this.props

      const currentChildren = children.length ?
        children[this.state.currentSlideIdx] :
        children

      return (
        <div onClick={this.props.changeOnClick ? this.getNextSlide : undefined}>
          <Device>
            {currentChildren}
          </Device>
        </div>
      )
    }
  }
}

export default withCarousel
