import React from 'react';
import { ImageBackground, 
         StyleSheet, 
         Text, View, 
         TextInput, 
         SafeAreaView,
         Button} from 'react-native';
import image from './images/james1.jpeg';


export default function App() {
  
  const [text, setText] = React.useState('');
  
  // const Separator = () => {
  //   <View style={styles.separator} />
  // }

  const submitButton = () => {
      setText(text);
  }

  return (
    <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image} resizeMode="cover">
              <Text style={styles.HOne}>What you want know about James Webb?</Text>
                
                <TextInput
                  style={styles.input}
                  onChangeText={setText}
                  value={text}
                />
                {/* <Separator /> */}
                <Button 
                  title='Submit'
                  onPress={submitButton}
                />
                
                <Text style={styles.HOne}>
                  List:
                </Text>
                <Text style={styles.HOne}>
                  {title}
                </Text>   
          </ImageBackground>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
     flex: 1,
     justifyContent: "center"
  },
  HOne: {
    color:"#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center"
  },
  input: {
     height: 45,
     width: 250,

     margin: 15,
     borderWidth: 2,
     borderRadius: 3,
     padding: 19
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
