// File: ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import BottomToolbar from '@/components/BottomToolBar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const cryptoMockData = [
    { name: 'Bitcoin', amount: '1,730,000', symbol: 'MXN', icon: require('../../assets/images/bitcoin.png'), color: '#f7931a' },
    { name: 'Ether', amount: '40,939', symbol: 'MXN', icon: require('../../assets/images/etherium.png'), color: '#3c3c3d' },
    { name: 'Polkadot', amount: '91.2', symbol: 'MXN', icon: require('../../assets/images/polkadot.png'), color: '#e6007a' },
    { name: 'Atom', amount: '91.2', symbol: 'MXN', icon: require('../../assets/images/atom.png'), color: '#4654ff' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <TouchableOpacity onPress={() => router.replace('/LearningScreen')} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color={Colors[colorScheme].primary} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <Text style={[styles.email, { color: Colors[colorScheme].primary }]}>Correo@gmail.com</Text>
        </View>

        <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>Tus Cryptos</Text>

        {cryptoMockData.map((crypto, index) => (
          <View key={index} style={[styles.card, { backgroundColor: Colors[colorScheme].cardBackground }]}>
            <Image source={crypto.icon} style={styles.icon} />
            <View style={styles.cardContent}>
              <Text style={[styles.cryptoName, { color: crypto.color }]}>{crypto.name}</Text>
              <Text style={[styles.cryptoValue, { color: Colors[colorScheme].text }]}>{crypto.amount} {crypto.symbol}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomToolbar activeTab="Profile" onTabPress={(tab) => console.log(tab)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 100,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0003FF',
    marginRight: 15,
  },
  email: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cryptoName: {
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
  cryptoValue: {
    fontFamily: Fonts.medium,
    fontSize: 15,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },
});

export default ProfileScreen;