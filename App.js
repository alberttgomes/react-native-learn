import React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';


const DATA = [
  {
    id: '0',
    firstName: 'Albert',
    lastName: 'Gomes',
    age: '26'
  },
  {
    id: '1',
    firstName: 'Diego',
    lastName: 'Gomes',
    age: '20'
  },
  {
    id: '2',
    firstName: 'Wdyla',
    lastName: 'Carvalho',
    age: '19'
  },
  {
    id: '3',
    firstName: 'Yohana',
    lastName: 'Texeira',
    age: '20'
  },
  {
    id: '4',
    firstName: 'Thiago',
    lastName: 'Guedes',
    age: '22'
  } 

];

const Item = ({ firstName }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{firstName}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item firstName={item.firstName} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleT}>Students System for internt University</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.view}>
        <Button
          title='PRESS ME'
          style={styles.button}
          onPress={() => alert("This is an list of students that course time")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#000Bf4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    color: '#FFFFFF'
  },
  titleT: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20 
  },
  view: {
    marginBottom: 170,
    width: 350,
    marginLeft: 30
  },
  button: {
    fontWeight: 'bold',
  }
});

export default App;