import PropTypes from 'prop-types'

const defaultProps = {
  carousel: false,
  changeOnClick: true,
  interval: 2000,
}

const propTypes = {
  children: PropTypes.element.isRequired,
  carousel: PropTypes.boolean,
  changeOnClick: PropTypes.boolean,
  interval: PropTypes.float,
}

export default {
  defaultProps,
  propTypes
}
