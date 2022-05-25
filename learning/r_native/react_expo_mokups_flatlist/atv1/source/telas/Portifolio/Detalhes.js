import React from 'react'
import { StyleSheet, Text, Image, Dimensions, View } from 'react-native'
import icone from '../../../assets/icone.png'
import trioti from '../../../assets/trioti.jpg'

export default function Detalhes() {
    return <>
        <Text style={styles.detalhes}>Detalhes do App</Text>
        <Text style={styles.titulo}>Prof. Wellington</Text>
        <View style={styles.meio}>
            <Image style={styles.meuIcone} source={icone} />
            <Text style={styles.todo}>Estudando React Native</Text>
        </View>
        <Text style={styles.desc}>Executando o aplicativo com expo</Text>
        <Text style={styles.turma}>Desenho da turma</Text>
        <Image style={styles.foot} source={trioti} />
    </>
}

const width2 = Dimensions.get('screen').width

const styles = StyleSheet.create({
    detalhes: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center"
    },
    titulo: {
        color: "#cc7777",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 35,
        textAlign: "center"
    },
    todo: {
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 20,
        margin: 10
    },
    desc: {
        color: "#000",
        fontSize: 16,
        paddingVertical: 10,
        textAlign: "center"
    },
    turma: {
        fontSize: 15,
        fontStyle: "italic",
        paddingHorizontal: 20
    },
    meuIcone: {
        width: 32,
        height: 32,
        marginLeft: 30
    },
    meio: {
        flexDirection: "row",
        padding: 10
    },
    foot: {
        width: "100%",
        height: 734 / 1040 * width2
    }
})