import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Provider from './components/postOperation';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
