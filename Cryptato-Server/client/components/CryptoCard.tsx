import React from 'react';
import { View, Text, Image, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

interface CryptoCardProps {
  crypto: string;
  price: string;
  variation: string;
  icon: any;
}

export default function CryptoCard({ crypto, price, variation, icon }: CryptoCardProps) {
  const colorScheme = useColorScheme() ?? 'light';

  // Detect if variation is negative
  const isNegative = variation.trim().startsWith('-');

  const variationColor = isNegative
    ? '#FF4A60' // red
    : Colors[colorScheme].success; // green

  return (
    <View style={[styles.card, { backgroundColor: Colors[colorScheme].cardBackground }]}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.info}>
        <Text style={[styles.crypto, { color: Colors[colorScheme].text }]}>{crypto}</Text>
        <Text style={[styles.variation, { color: variationColor }]}>{variation}</Text>
        <Text style={[styles.price, { color: Colors[colorScheme].text }]}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    maxWidth: 320,
    alignSelf: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 89,
    height: 89,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  crypto: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    marginBottom: 10,
  },
  variation: {
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  price: {
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
});