import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPalette from 'react-native-color-palette';

export default function App() {
  const [selectedColor, setSelectedColor] = useState('#C0392B');
  return (
    <View style={styles.container}>
      <ColorPalette
        onChange={setSelectedColor}
        value={selectedColor}
        // colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
        title={"Controlled Color Palette:"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
