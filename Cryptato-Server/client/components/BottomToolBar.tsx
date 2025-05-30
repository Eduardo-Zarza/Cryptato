import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';

interface Props {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export default function BottomToolbar({ activeTab, onTabPress }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();
  
  return (
    <View style={[styles.toolbar, { backgroundColor: Colors[colorScheme].background }]}>
      <TouchableOpacity style={styles.toolbarButton} onPress={() => router.replace('/LearningScreen')}>
        <Ionicons
          name="home-outline"
          size={40}
          color={activeTab === 'Home' ? Colors[colorScheme].primary : Colors[colorScheme].text}
        />
        <Text style={[styles.toolbarText, { color: activeTab === 'Home' ? Colors[colorScheme].primary : Colors[colorScheme].text }]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.toolbarButton} onPress={() => router.replace('/(tabs)/SimulationScreen')}>
        <Ionicons
          name="book-outline"
          size={40}
          color={activeTab === 'Learning' ? Colors[colorScheme].primary : Colors[colorScheme].text}
        />
        <Text style={[styles.toolbarText, { color: activeTab === 'Learning' ? Colors[colorScheme].primary : Colors[colorScheme].text }]}>
          Learn
        </Text>
      </TouchableOpacity>
        <TouchableOpacity
        style={styles.toolbarButton}
        onPress={() => router.replace('/ProfileScreen')} // <-- aquí va la navegación
      >
        <Ionicons
          name="person-outline"
          size={40}
          color={activeTab === 'Profile' ? Colors[colorScheme].primary : Colors[colorScheme].text}
        />
        <Text
          style={[
            styles.toolbarText,
            { color: activeTab === 'Profile' ? Colors[colorScheme].primary : Colors[colorScheme].text },
          ]}
        >
          Perfil
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  toolbarButton: {
    alignItems: 'center',
  },
  toolbarText: {
    fontSize: 12,
    marginTop: 2,
  },
});
