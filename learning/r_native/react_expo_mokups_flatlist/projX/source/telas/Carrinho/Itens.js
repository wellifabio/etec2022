import React from "react"
import Texto from "../../components/Texto"
import { View, Image, StyleSheet } from "react-native"

export default function Itens({ titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        {lista.map(({ nome, imagem }) => {
            return <View style={estilos.item} key={nome}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Image style={estilos.imagem} source={imagem}></Image>
            </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color:"#ffa500",
        fontWeight:"bold",
        marginTop: 30,
        marginBottom: 30,
        fontSize:25
    },
    item: {
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 15,
        alignItems: "center"
    },
    imagem: {
        width:50,
        height: 50
    },
    nome: {
        fontSize: 18,
        color:"#999",
        marginLeft: 15,
        lineHeight: 25
    }
})