import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import CryptoCard from '../../components/CryptoCard';
import Button from '../../components/Button';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>Cryptato</Text>
      <Text style={[styles.subtitle, { color: Colors[colorScheme].secondary }]}>
        Invierte inteligente,{"\n"}crece seguro
      </Text>

      <CryptoCard
        crypto="Bitcoin"
        price="1,730,000 MXN"
        variation="+2.35%"
        icon={require('../../assets/images/bitcoin.png')}
      />

      <Button
        title="Crear una cuenta"
        onPress={() => router.push('/CreateAccountScreen')}
      />

      <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
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
    fontSize: 25,
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
