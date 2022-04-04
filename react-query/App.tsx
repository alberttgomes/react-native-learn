import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';

import NasaEpic from "./components/news";

const queryClient = new QueryClient();

export default function App() {
   <QueryClientProvider client={queryClient}>
      <SafeAreaViewBase>
          <Text>API NASA EPICS</Text>
          <NasaEpic />
      </SafeAreaViewBase>
   </QueryClientProvider>
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
