import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
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
