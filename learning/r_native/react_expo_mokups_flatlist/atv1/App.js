import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Topo from './source/telas/Portifolio/Topo'
import Detalhes from './source/telas/Portifolio/Detalhes'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topo />
      <Detalhes />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})