import React from 'react';
import { Button, 
         SafeAreaView, 
         View, 
         Image,
         FlatList, 
         StyleSheet, 
         Text, 
         StatusBar} from 'react-native';

const picture = require("./assets/albert.png");
const picture1 = require("./assets/bakku.jpg");
const picture2 = require("./assets/boy.jpg");
const picture3 = require("./assets/thiago.jpg");
const picture4 = require("./assets/korra-children-lin.jpg");
const picture5 = require("./assets/korra.jpeg");        


const DATA = [
  {
    id: '0',
    firstName: 'Albert',
    lastName: 'Gomes',
    age: '26',
    avatar: picture
  },
  {
    id: '1',
    firstName: 'Diego',
    lastName: 'Gomes',
    age: '20',
    avatar: picture1
  },
  {
    id: '2',
    firstName: 'Guilherme',
    lastName: 'Zaicaner',
    age: '56',
    avatar: picture2
  },
  {
    id: '3',
    firstName: 'Thiago',
    lastName: 'Guedes',
    age: '22',
    avatar: picture3
  },
  {
    id: '4',
    firstName: 'Wdyla',
    lastName: 'Carvalho',
    age: '19',
    avatar: picture4
  },
  {
    id: '5',
    firstName: 'Yohana',
    lastName: 'Texeira',
    age: '20',
    avatar: picture5
  }
   
];

const Item = ({ firstName, avatar }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={avatar} />
    <Text style={styles.title}>{firstName}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item
      avatar={item.avatar}
      firstName={item.firstName}

    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleT}>Students System for internt University Catolica</Text>
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
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image:{
    width: 90,
    height: 90,
    marginRight: 20,
    borderColor: "#fff",
    borderRadius: 30
  },  
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#000Bf4',
    borderRadius: 30,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  titleT: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20 
  },
  view:{
    margin: 20
  },
  button: {
    fontWeight: 'bold',
    height: 150,
    width: 180
  }
});

export default App;