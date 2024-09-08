import { Text, View } from 'react-native';
import style from '@/constants/style';
import { Ionicons } from '@expo/vector-icons';
import Botao from '@/components/botao';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function TelaInicial() {
  const nav = useNavigation();
  return (
    <View style={[style.centralizado, { gap: 10 }]}>
      <Ionicons name='logo-react' size={100}></Ionicons>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize : 20, fontWeight : 700 }}>Estudos Master</Text>
        <Text style={{ fontSize : 16 }}>Samuel Babora</Text>
      </View>

      {/* Forma oficial de fazer navegação no react native */}
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ color: "#FFFFFF" }}>Clique-me</Text>
      </Botao>
    </View>
  );
}

  