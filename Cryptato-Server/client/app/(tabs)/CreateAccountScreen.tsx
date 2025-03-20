import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CreateAccountScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();
  
  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color={Colors[colorScheme].primary} />
      </TouchableOpacity>
      
      <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>Bienvenido</Text>
      
      <Text style={[styles.label, { color: Colors[colorScheme].secondary }]}>¿De qué país eres?</Text>
      <TouchableOpacity style={styles.countrySelector}>
        <Text style={styles.countryText}>🇲🇽 México</Text>
        <Ionicons name="chevron-down" size={18} color={Colors[colorScheme].secondary} />
      </TouchableOpacity>

      <Text style={[styles.label, { color: Colors[colorScheme].secondary }]}>Correo electrónico</Text>
      <TextInput placeholder="" style={[styles.input, { backgroundColor: Colors[colorScheme].cardBackground }]} placeholderTextColor="#888" />

      <Text style={[styles.label, { color: Colors[colorScheme].secondary }]}>Contraseña</Text>
      <View style={[styles.passwordContainer, { backgroundColor: Colors[colorScheme].cardBackground }]}>
        <TextInput
          secureTextEntry={hidePassword}
          placeholder=""
          placeholderTextColor="#888"
          style={styles.passwordInput}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? "eye" : "eye-off"} size={20} color={Colors[colorScheme].primary} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}  onPress={() => router.push('/AlmostFinishScreen')}>
        <Text style={styles.buttonText}>Continuar</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 48,
    fontFamily: Fonts.bold,
    marginBottom: 20,
    marginTop: 10
  },
  label: {
    fontSize: 24,
    fontFamily: Fonts.medium,
    marginTop: 15,
    marginBottom: 18,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#fff',
  },
  button: {
    marginTop: 30,
    padding: 15,
    borderRadius: 18,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.medium,
    alignItems: 'center'
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
  },
  countryText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.regular,
  },
  backButton: {
    marginBottom: 10,
  },
});
