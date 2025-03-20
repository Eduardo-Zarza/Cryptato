import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: ButtonProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '8%',
    marginTop: 30
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
});
