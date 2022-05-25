import React from 'react'
import { Text, Image, StyleSheet, Dimensions } from 'react-native'
import cotidiano3 from '../../../assets/cotidiano3.jpg';

export default function Topo() {
    return <>
        <Image style={styles.topo} source={cotidiano3} />
        <Text style={styles.msgAbsoluta} >App básico Cotidiano</Text>
    </>
}

const width1 = Dimensions.get('screen').width

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 135 / 490 * width1
    },
    msgAbsoluta: {
        color: "#fff",
        position: 'absolute',
        paddingVertical: 40,
        textAlign: "center",
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 40
    }
})