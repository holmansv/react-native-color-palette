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
        title={"Controlled Color Palette:"}
      />
      <View style={{ backgroundColor: selectedColor === '#FFFFFF' ? '#000000' : '#FFFFFF', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: selectedColor }}>{selectedColor}</Text>
      </View>
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
