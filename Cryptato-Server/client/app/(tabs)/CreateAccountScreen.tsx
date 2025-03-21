import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { registerUser } from '../../hooks/useFirebaseAuth'; //firebase

export default function CreateAccountScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  //firebase
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // loading
  const [error, setError] = useState<string | null>(null);
  
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
      <TextInput 
        placeholder="Correo electrónico"
        style={[styles.input, { backgroundColor: Colors[colorScheme].cardBackground }]}
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={[styles.label, { color: Colors[colorScheme].secondary }]}>Contraseña</Text>
      
      <View style={[styles.passwordContainer, { backgroundColor: Colors[colorScheme].cardBackground }]}>
        <TextInput
          secureTextEntry={hidePassword}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? "eye" : "eye-off"} size={20} color={Colors[colorScheme].primary} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
      style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}
      onPress={async () => {
        setLoading(true); // Activar indicador de carga
        setError(null); // Limpiar errores anteriores
    
        const result = await registerUser(email, password);
    
        if (result.success) {
          console.log('Usuario registrado:', result.user);
          router.push('/AlmostFinishScreen'); // Redirigir si fue exitoso
        } else {
          setError(result.error ?? "Ocurrió un error desconocido"); // ✅ Siempre será string

        }
    
        setLoading(false); // Desactivar indicador de carga
      }}
      disabled={loading} // Deshabilita el botón mientras carga
    >
      <Text style={styles.buttonText}>{loading ? "Creando cuenta..." : "Continuar"}</Text>
        
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
    fontFamily: Fonts.bold,
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
