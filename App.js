import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Formulario from './src/components/Form';
import Display from './src/components/viewr';
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Formulario/>
      <Display />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
