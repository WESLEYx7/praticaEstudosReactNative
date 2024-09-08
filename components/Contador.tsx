import style from "@/constants/style";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text } from "react-native";
import Botao from "./botao";

{/* Criando Inteface para passar como parâmetro na chamada da função */}
export interface ContadorProps {
    valorInicial: number
}

export default function Contador(props: ContadorProps) {

    {/* Hook do useState para armazenar o valor da variável */}
    const [numero, setNumero] = useState(props.valorInicial??0) 

    return (

        <View style={style.centralizado}>
            <Text style={{ fontSize : 50 }} >{numero}</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Botao onPress={() => setNumero(numero + 1)}>
                    <Ionicons name="add" size={24} color={"white"}></Ionicons>
                </Botao>

                <Botao onPress={() => setNumero(numero - 1)}>
                    <Ionicons name="remove" size={24} color={"white"}></Ionicons>
                </Botao>
            </View>
        </View>

    );
}