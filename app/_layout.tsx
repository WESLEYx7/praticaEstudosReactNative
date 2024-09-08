import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown : true }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Início',
            title: 'Bem Vindo!',
            drawerIcon: () => <Ionicons name='home-outline' size={18} color={"#3A98FF"}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Primeiro Componente',
            title: 'Primeiro Componente',
            drawerIcon: () => <Ionicons name='heart-circle-outline' size={18} color={"#3A98FF"}></Ionicons>
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            drawerIcon: () => <Ionicons name='add' size={18} color={"#3A98FF"}></Ionicons>
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
