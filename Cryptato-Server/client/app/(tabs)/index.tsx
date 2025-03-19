import { Stack } from 'expo-router';
import HomeScreen from './HomeScreen';

export default function TabHomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <HomeScreen />
    </>
  );
}
