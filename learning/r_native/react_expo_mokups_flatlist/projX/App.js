import { View, SafeAreaView, StatusBar, StyleSheet, Text, FlatList } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import Texto from './source/components/Texto'
import Topo from './source/telas/Carrinho/Topo'
import Detalhes from './source/telas/Carrinho/Detalhes'
import Item from './source/telas/Carrinho/Item'
import Mocks from './source/mocks/carrinho'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return <View><Text>Fontes montserrat não carregada</Text></View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={
          () => {
            return <>
              <Topo {...Mocks.topo} />
              <Detalhes {...Mocks.detalhes} />
              <Texto style={styles.titulo}>{Mocks.itens.titulo}</Texto>
            </>
          }
        }
        ListFooterComponent={
          () => {
            return <>
              <FlatList
                data={Mocks.itensf.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={
                  () => {
                    return <>
                      <Texto style={styles.titulo}>{Mocks.itensf.titulo}</Texto>
                    </>
                  }
                } />
            </>
          }
        }
      />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    color: "#ffa500",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25
  }
})
