import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import ProgressBar from '../../components/ProgressBar';
import { Ionicons } from '@expo/vector-icons';
import BottomToolbar from '@/components/BottomToolBar';
import { useRouter } from 'expo-router';

export default function LearningScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
        
        {/* Header Icons */}
        <View style={styles.header}>
          <Ionicons name="settings-outline" size={24} color={Colors[colorScheme].primary} />
          <Ionicons name="person-circle-outline" size={24} color={Colors[colorScheme].primary} />
        </View>

        {/* Título Principal */}
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
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/CourseScreen?id=intro')}
            style={[styles.card, { backgroundColor: '#FFA800' }]}>
            <Ionicons name="book-outline" size={40} color="#fff" />
            <Text style={styles.cardText}>Introducción</Text>
          </TouchableOpacity>

          <View style={[styles.card, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
            <Text style={styles.cardText}>Aplicación en {'\n'}criptos</Text>
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainerMaxSize}>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/CourseScreen?id=seguridad')}
          style={[styles.cardMaxSize, { backgroundColor: '#FF4A60' }]}>
          <Ionicons name="wallet-outline" size={80} color="#fff" />
          <Text style={styles.cardTextMaxSize}>Seguridad</Text>
        </TouchableOpacity>


          <View style={[styles.cardMaxSize, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={80} color="#aaa" />
            <Text style={styles.cardTextMaxSize}>Wallets</Text>
          </View>
        </ScrollView>

        {/* Sección Defi */}
        <Text style={[styles.sectionTitle, { color: Colors[colorScheme].text }]}>
          Defi (Finanzas desentralizadas)
        </Text>
        <Text style={[styles.sectionSubtitle, { color: Colors[colorScheme].secondary }]}>
          Descubre Staking, Lending y Yield Farming
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/CourseScreen?id=defi')}
          style={[styles.card, { backgroundColor: '#FF4C4C' }]}>
          <Ionicons name="bar-chart-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>¿Qué es Defi?</Text>
        </TouchableOpacity>

          <View style={[styles.card, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
            <Text style={styles.cardText}>Staking</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
            <Text style={styles.cardText}>Leading</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
            <Text style={styles.cardText}>Yield Farming</Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#333' }]}>
            <Ionicons name="lock-closed-outline" size={40} color="#aaa" />
            <Text style={styles.cardText}>Riesgos del DeFi</Text>
          </View>
        </ScrollView>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Toolbar */}
      <BottomToolbar
        activeTab="Home"
        onTabPress={(tabName) => {
          console.log('Tab pressed:', tabName);
        }}
      />
    </View>
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
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    marginBottom: 30,
  },
  startButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 35,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 25,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.bold,
  },
  sectionTitle: {
    fontSize: 23,
    fontFamily: Fonts.bold,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
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
  cardContainerMaxSize: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardMaxSize: {
    width: 180,
    height: 190,
    borderRadius: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextMaxSize: {
    color: '#fff',
    marginTop: 10,
    fontFamily: Fonts.medium,
    textAlign: 'center',
  },
});