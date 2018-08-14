import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'

export default class ColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.defaultColor || this.props.value || this.props.colors[0]
    };
    this.onChange = this.onChange.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  setColor(props) {
    this.setState({color: props.value})
  }

  componentDidMount() {
    this.setColor(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value)
      this.setColor(nextProps)
  }

  getContrastColor(hex) {
    return (parseInt(hex.substring(1), 16) > 0xffffff / 2) ? 'black' : 'white';
  }

  onChange(color) {
    this.setState({color}, this.props.onChange(color))
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.props.title}</Text>
        <View style={{...styles.colorContainer, ...this.props.paletteStyles}}>
          {this.props.colors.map((color) => {
            return (
              <TouchableOpacity
                style={{...styles.colorOption, backgroundColor: color}}
                onPress={() => this.onChange(color)}
                key={color}
              >
                {this.state.color === color &&
                  <FAIcon
                    name={'check-circle-o'}
                    size={25}
                    color={this.getContrastColor(color)}
                  />
                }
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    shadowOffset: {width: 2, height: 2,},
    shadowColor: 'black',
    shadowOpacity: .25,
  }
});
ColorPalette.defaultProps = {
  colors: [
    '#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB',
    '#1ABC9C', '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12',
    '#E67E22', '#D35400', '#ffffff', '#BDC3C7', '#95A5A6', '#7F8C8D',
    '#34495E', '#2C3E50', '#000000'
  ],
  defaultColor: null,
  value: null,
  title: "Color Palette:",
  onChange: () => {},
  paletteStyles: {}
};

ColorPalette.PropTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onChange: PropTypes.func,
  defaultColor: PropTypes.string,
  value: PropTypes.string,
  paletteStyles: PropTypes.shape({})
};