import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme, Animated, Dimensions } from 'react-native';
import CryptoCard from '../../components/CryptoCard';
import Button from '../../components/Button';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { useRouter } from 'expo-router';
import useData from '../../hooks/useData'; // Importar el hook que maneja la API

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  // Traer los datos de las criptomonedas
  const { data: bitcoinData, loading: bitcoinLoading, error: bitcoinError } = useData('BTCUSDT');
  const { data: etherData, loading: etherLoading, error: etherError } = useData('ETHUSDT');
  const { data: polkadotData, loading: polkadotLoading, error: polkadotError } = useData('DOTUSDT');
  const { data: atomData, loading: atomLoading, error: atomError } = useData('ATOMUSDT');
  const { data: solanaData, loading: solanaLoading, error: solanaError } = useData('SOLUSDT');

  const cryptoData = [
    {
      crypto: "Bitcoin",
      price: bitcoinLoading ? "Cargando..." : bitcoinError ? "Error" : bitcoinData?.price ?? "Cargando...",
      variation: bitcoinLoading ? "Cargando..." : bitcoinError ? "Error" : `${bitcoinData?.priceChangePercent ?? "0"}%`,
      icon: require('../../assets/images/bitcoin.png'),
    },
    {
      crypto: "Ether",
      price: etherLoading ? "Cargando..." : etherError ? "Error" : etherData?.price ?? "Cargando...",
      variation: etherLoading ? "Cargando..." : etherError ? "Error" : `${etherData?.priceChangePercent ?? "0"}%`,
      icon: require('../../assets/images/etherium.png'),
    },
    {
      crypto: "Polkadot",
      price: polkadotLoading ? "Cargando..." : polkadotError ? "Error" : polkadotData?.price ?? "Cargando...",
      variation: polkadotLoading ? "Cargando..." : polkadotError ? "Error" : `${polkadotData?.priceChangePercent ?? "0"}%`,
      icon: require('../../assets/images/polkadot.png'),
    },
    {
      crypto: "Atom",
      price: atomLoading ? "Cargando..." : atomError ? "Error" : atomData?.price ?? "Cargando...",
      variation: atomLoading ? "Cargando..." : atomError ? "Error" : `${atomData?.priceChangePercent ?? "0"}%`,
      icon: require('../../assets/images/atom.png'),
    },
    {
      crypto: "Solana",
      price: solanaLoading ? "Cargando..." : solanaError ? "Error" : solanaData?.price ?? "Cargando...",
      variation: solanaLoading ? "Cargando..." : solanaError ? "Error" : `${solanaData?.priceChangePercent ?? "0"}%`,
      icon: require('../../assets/images/solana.png'),
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % cryptoData.length;
      Animated.timing(translateX, {
        toValue: -nextIndex * width,
        duration: 720,
        useNativeDriver: true,
      }).start();
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>Cryptato</Text>
      <Text style={[styles.subtitle, { color: Colors[colorScheme].secondary }]}>
        Invierte inteligente,{"\n"}crece seguro
      </Text>

      <View style={{ width, height: 150, overflow: 'hidden' }}>
        <Animated.View style={{ flexDirection: 'row', transform: [{ translateX }] }}>
          {cryptoData.map((item, index) => (
            <View key={index} style={{ width }}>
              <CryptoCard
                crypto={item.crypto}
                price={item.price}
                variation={item.variation ?? "Cargando..."}
                icon={item.icon}
              />
            </View>
          ))}
        </Animated.View>
      </View>

      <Button
        title="Crear una cuenta"
        onPress={() => router.push('./CreateAccountScreen')}
      />

      <TouchableOpacity onPress={() => router.push('./LoginScreen')}>
        <Text style={[styles.loginText, { color: Colors[colorScheme].link }]}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 70,
    fontFamily: Fonts.bold,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    marginBottom: 30,
  },
  loginText: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: Fonts.medium,
  },
});
