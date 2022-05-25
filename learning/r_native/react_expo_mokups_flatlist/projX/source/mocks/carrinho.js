//mockup funciona como uma API que fornecedados a nossa aplicação

import topo from '../../assets/topo.png'
import logoVendedor from '../../assets/logo.png'

import antena2g from '../../assets/Itens/antena2g3g.png'
import antenaWifi from '../../assets/Itens/antenaWifi.png'
import modem from '../../assets/Itens/modem.png'
import node from '../../assets/Itens/nodeMcu.png'

import memoria from '../../assets/itensf/memoria.png'
import processador from '../../assets/itensf/processador.png'
import pvideo from '../../assets/itensf/pvideo.png'
import ssd from '../../assets/itensf/ssd.png'

const carrinho = {
    topo: {
        titulo: "Carrinho",
        imagem: topo
    },
    detalhes: {
        titulo: "Detalhes do carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Um kit IoT que revoluciona a vida dos estudantes",
        logoVendedor: logoVendedor,
        nomeVendedor: "Nuvem's Shopping",
        preco: "R$ 99,00"
    },
    itens: {
        titulo: "Itens do Carrinho",
        lista: [
            {
                nome: "Antena 2g/3g",
                imagem: antena2g,
            },
            {
                nome: "Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCU",
                imagem: node,
            }
        ]
    },
    itensf: {
        titulo: "Outros itens do Carrinho",
        lista: [
            {
                nome: "Memória RAM",
                imagem: memoria,
            },
            {
                nome: "Processador",
                imagem: processador,
            },
            {
                nome: "Placa de Vídeo",
                imagem: pvideo,
            },
            {
                nome: "SSD",
                imagem: ssd,
            }
        ]
    }
}

export default carrinho;