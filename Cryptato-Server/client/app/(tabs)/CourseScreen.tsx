import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { courses } from '@/constants/Courses';
import { Colors } from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';

export default function CourseScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const { id } = useLocalSearchParams();
  const course = courses.find(c => c.id === id);
  const [page, setPage] = useState(0);

  if (!course) return <Text style={{ color: '#fff', padding: 20 }}>Curso no encontrado</Text>;

  const handleNext = () => {
    if (page < course.pages.length - 1) setPage(prev => prev + 1);
  };

  const handleBack = () => {
    if (page > 0) setPage(prev => prev - 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <TouchableOpacity onPress={() => router.replace('/LearningScreen')}>
        <Text style={[styles.backText, { color: '#A3A4FF', fontFamily: Fonts.medium }]}>◀ Volver</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { color: Colors[colorScheme].text, fontFamily: Fonts.bold }]}>
        {course.title}
      </Text>
      <Text style={[styles.subtitle, { color: '#A3A4FF', fontFamily: Fonts.medium }]}>
        {course.subtitle} {page + 1}/{course.pages.length}
      </Text>

      <Text style={[styles.pageText, { color: Colors[colorScheme].text, fontFamily: Fonts.regular }]}>
        {course.pages[page]}
      </Text>

      <View style={styles.navButtons}>
        {page > 0 && (
          <TouchableOpacity onPress={handleBack} style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}>
            <Text style={styles.buttonText}>Anterior</Text>
          </TouchableOpacity>
        )}
        {page < course.pages.length - 1 ? (
          <TouchableOpacity onPress={handleNext} style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => router.replace('/LearningScreen')} style={[styles.button, { backgroundColor: Colors[colorScheme].primary }]}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 28, // aumentado
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 26, // aumentado
    marginBottom: 20,
  },
  pageText: {
    fontSize: 24, // aumentado
    lineHeight: 26, // aumentado
    marginBottom: 30,
  },
  navButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: Fonts.bold,
  },
});