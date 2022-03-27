import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, SafeAreaView } from 'react-native';




const DATA = [
  {
    id: '0',
    team: 'Náutico',
    city: 'Recife',
    state: 'PE'
  },
  {
    id: '1',
    team: 'CRB',
    city: 'Maceió',
    state: 'AL'
  },
  {
    id: '2',
    team: 'Fortaleza',
    city: 'Fortaleza',
    state: 'CE'
  },
  {
    id: '3',
    team: 'Sport',
    city: 'Recife',
    state: 'PE'
  }
]

const Item = ({item}) => {
  <View style={styles.title}>
    <Text>{item.team}</Text>
  </View>
} 



export default function App() {
  
  const renderItem = ({ item }) => {
      <Item
        item={item}
      />
  }
 
  return (
      <SafeAreaView style={styles.container}>
        <Text>When will win the Final of the Cup North East?</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={team => team.id}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTeam: {
    backgroundColor: "#0000B4",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16    
  },
  title: {
    fontWeight: "bold",
    fontSize: 32
  }
});
