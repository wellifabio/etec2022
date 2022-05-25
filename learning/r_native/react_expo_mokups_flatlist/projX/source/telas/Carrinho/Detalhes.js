import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Texto from '../../components/Texto'

export default function Detalhes({titulo, tituloProduto, descricao, logoVendedor, nomeVendedor, preco}) {
    return <>
        <Texto style={styles.detalhes}>{titulo}</Texto>
        <Texto style={styles.titulo}>{tituloProduto}</Texto>
        <View style={styles.vendedor}>
            <Image style={styles.logoVendedor} source={logoVendedor} />
            <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
        </View>
        <Texto style={styles.desc}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
    </>
}

const styles = StyleSheet.create({
    detalhes: {
      color: "#000",
      fontWeight: "bold",
      fontSize: 25,
      lineHeight: 35,
      textAlign: "center",
    },
    titulo: {
      color: "#ffa500",
      fontWeight: "bold",
      fontSize: 25,
      lineHeight: 35,
      textAlign: "center"
    },
    nomeVendedor: {
      color: "#a3a3a3",
      fontSize: 18,
      lineHeight:20,
      margin:10
    },
    desc: {
      color: "#000",
      fontSize: 16,
      paddingVertical: 10
    },
    preco: {
      fontSize: 35,
      fontWeight: "bold",
      textAlign: "right",
      paddingHorizontal: 10
    },
    logoVendedor: {
      width: 32,
      height: 32,
      marginLeft: 30
    },
    vendedor:{
      flexDirection:"row",
      padding: 10
    }
  })