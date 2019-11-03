import PropTypes from 'prop-types';
import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorOption from './color-option';

const ColorPalette = (props) => {
  const {
    colors,
    defaultColor,
    icon,
    onChange,
    paletteStyles,
    scaleToWindow,
    title,
    titleStyles,
    value,
  } = props;
  const [color, setColor] = useState(value || defaultColor);
  
  useEffect(() => {
    value && setColor(value);
  }, [value]);

  const onColorChange = useCallback((color) => {
    setColor(color);
    onChange(color);
  }, [onChange]);

  return (
    <Fragment>
      <Text style={[styles.titleStyles, { ...titleStyles }]}>{title}</Text>
      <View style={[styles.colorContainer, { ...paletteStyles }]}>
        {colors.map((c) => (
          <ColorOption
            key={c}
            color={c}
            icon={icon}
            onColorChange={onColorChange}
            scaleToWindow={scaleToWindow}
            isSelected={value ? value ===c : color ===c}
          />
        ))}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  titleStyles: {
    color: 'black',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

ColorPalette.defaultProps = {
  colors: [
    '#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C',
    '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E22', '#D35400',
    '#FFFFFF', '#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#2C3E50', '#000000',
  ],
  defaultColor: null,
  onChange: () => { },
  paletteStyles: {},
  scaleToWindow: false,
  title: "Color Palette:",
  titleStyles: {},
  value: null,
};

ColorPalette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onChange: PropTypes.func,
  defaultColor: PropTypes.string,
  value: PropTypes.string,
  paletteStyles: PropTypes.shape({})
};

export default ColorPalette;
