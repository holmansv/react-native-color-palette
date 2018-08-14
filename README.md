# React Native Color Palette.

A react native module for simple hex color selection

![alt text](./images/color-picker.png "Logo Title Text 1")

* [x] Controlled and Uncontrolled implementations
* [x] Simple to use


## Getting started
Install the color picker
```
npm install react-native-color-palette --save
```
And use it in your application
```javascript
import ColorPalette from 'react-native-color-palette'

const UncontrolledColorPicker = () => (
  <ColorPalette
    onChange={color => alert(`Color selected: ${color}`)}
    defaultColor={'#C0392B'}
    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
    title={"Uncontrolled Color Palette:"}
  />
)

const ControlledColorPicker = () => (
  let selectedColor = '#C0392B';
  <ColorPalette
    onChange={color => selectedColor = color)}
    value={selectedColor}
    colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
    title={"Controlled Color Palette:"}
  />
)
```
Due to its flexbox design, Color Palette will use space you provide!

## API
### Props

Color Palette accepts properties below.

| Property | Type | Note |
|--------------------|------------|--------|
|`colors`            |`Array`     |Array of hex color strings for rendering. ex) ['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']|
|`defaultColor`      |`String`    |Defines initial selected color in uncontrolled component.|
|`value`             |`String`    |Defines selected color in controlled component.|
|`paletteStyles`     |`Style`     |Styles passed to color palette container|
|`onChange`          |`Function`  |Callback with color (HEX string) as argument called when user confirms color selection.|
|`title`             |`String`    |Text to display at the top of the palette.|

## Thanks
We have worked in the open source community for a long time, and look forward to contributing more in the future!
