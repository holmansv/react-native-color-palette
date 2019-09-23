import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default class ColorPalette extends Component {
  static getContrastColor(hex) {
    return (parseInt(hex.substring(1), 16) > 0xffffff / 2) ? 'black' : 'white';
  }

  constructor(props) {
    super(props);
    const { defaultColor, value, colors } = props;
    this.state = { color: defaultColor || value || colors[0] };
  }

  static getDerivedStateFromProps(nextProps) {
    const { value } = this.props;
    if (nextProps.value !== value) {
      this.setState({ color: nextProps.value });
    }
  }

  onColorChange = (color) => {
    const { onChange } = this.props;
    this.setState({ color }, () => onChange(color));
  }

  renderIcon = () => {
    const { icon } = this.props;
    const { color } = this.state;
    if (icon) {
      return icon;
    }
    return <Text style={{ color: ColorPalette.getContrastColor(color), fontSize: 20 }} adjustsFontSizeToFit>✔︎</Text>;
  }

  renderColorOption = (c) => {
    const { color } = this.state;
    const { scaleToWindow } = this.props;
    let scaledWidth = width * .025;
    return (
      <TouchableOpacity
        key={c}
        onPress={() => this.onColorChange(c)}
        style={[
          styles.colorOption,
          { backgroundColor: c },
          scaleToWindow && {
            width: width * .07,
            height: width * .07,
            marginHorizontal: scaledWidth,
            marginVertical: scaledWidth,
            borderRadius: scaledWidth * 2
          }
        ]}
      >
        {color === c && this.renderIcon()}
      </TouchableOpacity>
    );
  }

  render() {
    const { title, paletteStyles, colors, titleStyles } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.titleStyles, { ...titleStyles }]}>{title}</Text>
        <View style={[styles.colorContainer, { ...paletteStyles }]}>
          {colors.map((c) => this.renderColorOption(c))}
        </View>
      </View>
    );
  }
}

//<editor-fold desc="Default Styles">
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyles: {
    color: 'black',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorOption: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: .25,
  }
});
//</editor-fold>

ColorPalette.defaultProps = {
  value: null,
  titleStyles: {},
  paletteStyles: {},
  onChange: () => {},
  defaultColor: null,
  scaleToWindow: false,
  title: "Color Palette:",
  colors: [
    '#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C',
    '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E22', '#D35400',
    '#ffffff', '#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#2C3E50', '#000000',
  ],
};

ColorPalette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onChange: PropTypes.func,
  defaultColor: PropTypes.string,
  value: PropTypes.string,
  paletteStyles: PropTypes.shape({})
};
