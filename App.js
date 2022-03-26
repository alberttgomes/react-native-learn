import React from 'react';
import { ImageBackground,
         Image, 
         StyleSheet, 
         Text, 
         View, 
         TextInput, 
         SafeAreaView,
         Button } from 'react-native';

import image from './images/spaceBody.png';
import imageAv from './images/body.png';

function App() {
  
  const [name, setName] = React.useState('');
  //const nameList  = [];
  
  // const Separator = () => {
  //   <View style={styles.separator} />
  // }

  return (
    <SafeAreaView style={styles.container}>
          <ImageBackground source={image} style={styles.image} resizeMode="cover">
              <Image
                source={imageAv}
                style={styles.imageAvatar}
              />
                <Text style={styles.HOne}>Fan Club James Webb</Text>
                  <TextInput 
                    style={styles.input}
                    value={name}
                    keyboardType="text"
                    placeholder="insert your name here"
                    onChangeText={e => setText(e.target.value)}
                  />
                  {/* <Separator /> */}
                    <Button
                      style={styles.button}
                      title="Submit"
                      onPress={() => setName(name)}     
                    />
                  <View style={styles.container}>
                    {name}
                  </View>
                    
          </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  button:{
    width: 250
  },
  image: {
     flex: 1,
     justifyContent: "center"
  },
  typography: {
    color:"#fff",
    fontWeight: "bold",
    textAlign:"center"
  },
  input: {
     height: 45,
     width: 350,
     backgroundColor: "#FFFFFF",
     margin: 15,
     borderWidth: 2,
     borderRadius: 3,
     padding: 19
  },
  imageAvatar: {
    width: 170,
    height: 170,
    marginTop: 50,
    borderRadius: 500,
    alignSelf: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;