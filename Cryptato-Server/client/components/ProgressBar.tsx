import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';

interface ProgressBarProps {
  progress: number; // valor entre 0 y 100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View style={styles.container}>
      <View style={[styles.barBackground, { backgroundColor: Colors[colorScheme].cardBackground }]}>
        <View
          style={[
            styles.barFill,
            { width: `${progress}%`, backgroundColor: Colors[colorScheme].primary },
          ]}
        />
      </View>
      <View style={styles.progressNumber}>
        <Ionicons name="star" size={14} color={Colors[colorScheme].primary} />
        <Text style={[styles.progressText, { color: Colors[colorScheme].primary }]}>
          {progress}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  barBackground: {
    flex: 1,
    height: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 10,
  },
  progressNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  progressText: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    marginLeft: 3,
  },
});
