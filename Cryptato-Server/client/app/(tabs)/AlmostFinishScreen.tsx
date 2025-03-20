import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, useColorScheme, ScrollView } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function FinishScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={28} color={Colors[colorScheme].primary} />
      </TouchableOpacity>


      <Text style={[styles.title, { color: Colors[colorScheme].primary }]}>
        Estamos por acabar...
      </Text>

      <View style={styles.switchRow}>
        <Text style={[styles.text, { color: Colors[colorScheme].text }]}>
          Acepto las <Text style={{ color: Colors[colorScheme].link }}>Políticas de privacidad</Text> de Cryptato sus <Text style={{ color: Colors[colorScheme].link }}>Términos y condiciones</Text> y el <Text style={{ color: Colors[colorScheme].link }}>Aviso de riesgo sobre criptomonedas</Text> y confirmo que tengo 18 años o más.
        </Text>
        <Switch
          value={acceptTerms}
          onValueChange={setAcceptTerms}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={[styles.text, { color: Colors[colorScheme].text }]}>
          Quiero recibir más información sobre <Text style={{ color: Colors[colorScheme].link }}>Cryptato en mi correo</Text>.
        </Text>
        <Switch
          value={acceptNewsletter}
          onValueChange={setAcceptNewsletter}
        />
      </View>

      <TouchableOpacity onPress={() => router.push('./LearningScreen')} style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}>
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 60,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 34,
    fontFamily: Fonts.bold,
    marginBottom: 40,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: Fonts.regular,
    paddingRight: 10,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  backButton: {
    marginBottom: 10,
  },
});
