import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const getContrastColor = hex => parseInt(hex.substring(1), 16) > 0xffffff / 2 ? '#000000' : '#FFFFFF';

const Icon = (props) => {
  const { icon, color } = props;
  if (icon) return icon;
  return <Text style={{ color: getContrastColor(color), fontSize: 20 }} adjustsFontSizeToFit>✔︎</Text>;
}

Icon.defaultProps = {
  icon: undefined
}

Icon.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string.isRequired,
}

export default Icon