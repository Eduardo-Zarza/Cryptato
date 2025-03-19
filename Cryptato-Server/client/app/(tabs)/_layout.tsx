import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Tabs.Screen name="CreateAccountScreen" options={{ headerShown: false }} />
      <Tabs.Screen name="FinishScreen" options={{ headerShown: false }} />
    </Tabs>
  );
}

