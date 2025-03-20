import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import ProgressBar from '../../components/ProgressBar';
import { Ionicons } from '@expo/vector-icons';

export default function LearningScreen() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      {/* Header Icons */}
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={24} color={Colors[colorScheme].primary} />
        <Ionicons name="person-circle-outline" size={24} color={Colors[colorScheme].primary} />
      </View>

      {/* Sección Principal */}
      <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>
        Comienza con el aprendizaje
      </Text>

      <ProgressBar progress={25} />

      <TouchableOpacity style={[styles.startButton, { backgroundColor: Colors[colorScheme].primary }]}>
        <Text style={styles.startButtonText}>Empieza ▶</Text>
      </TouchableOpacity>

      {/* Sección Blockchain & MetaMask */}
      <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>Blockchain & MetaMask</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: '#FFA800' }]}>
          <Ionicons name="book-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Introducción</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#333' }]}>
          <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
          <Text style={styles.cardText}>Aplicación en criptos</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#333' }]}>
          <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
          <Text style={styles.cardText}>Entornos seguros</Text>
        </View>
      </ScrollView>

      {/* Sección Wallets y seguridad */}
      <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>Wallets y seguridad</Text>
      <Text style={[styles.sectionSubtitle, { color: Colors[colorScheme].secondary }]}>
        La importancia de cuidar tus inversiones
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <View style={[styles.card, { backgroundColor: '#FF4A60' }]}>
          <Ionicons name="lock-closed-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Seguridad</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#333' }]}>
          <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
          <Text style={styles.cardText}>Wallets</Text>
        </View>
      </ScrollView>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: Fonts.bold,
    marginBottom: 15,
  },

  startButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 25,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
});
