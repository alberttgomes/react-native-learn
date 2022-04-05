import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, FlatList  } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';

import React from "react";
import { useQuery } from "react-query";
import axios from "axios";



const App = () => {

  const { isLoading, error, data } = useQuery("natural",() => 
    axios.get("https://epic.gsfc.nasa.gov/api/")
      .then((response) => response.data)
      .catch((err) => {
          alert(`Some wrong happened ${err}`);
      })
  );

    if (isLoading) return<Text>Loading...</Text>;

    if (error) return<Text>Some wrong happened: {error as string}</Text>

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>EPIC API NASA</Text>
              <FlatList
                  data={data}
                  renderItem={({item}) => (
                    <View>
                       <Image
                          source={item.data.image}
                          style={styles.img}
                       />
                       <View style={styles.textView}>
                          <Text style={styles.text}>Most Recent Natural: {item.natural}</Text>,
                          <Text style={styles.text}>Dates for Natural Color: {item.data.natural.all}</Text>,
                          <Text style={styles.text}>Dates for Enhanced Imagery: {item.data.enhanced.all}</Text>
                       </View>
                     </View>
                  )}
              />
              <StatusBar />
        </ScrollView>
    );

}

const Provider = () => {
  const queryClient = new QueryClient();
  return(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
     width: 60,
     height: 80,
     padding: 5,
     margin: 5,
     borderColor: "#000B43"
  },
  title: {
     fontSize:35,
     fontWeight: "bold",
     textAlign: "center"
  },
  text: {
    fontSize: 30,
    padding: 5
  },
  textView: {
    margin: 5,
    padding: 5
  }
});

export default Provider;
