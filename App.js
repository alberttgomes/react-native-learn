import { StatusBar } from 'expo-status-bar';
import { ImageBackground, 
         StyleSheet, 
         Text, View, 
         TextInput, 
         SafeAreaView,
         Button,
         Alert } from 'react-native';

import image from './images/body.png';


export default function App() {
  
  const [text, onChangeText] = React.useState("What you want know?");
  
  const Separator = () => {
    <View style={styles.separator} />
  }

  return (
    <SafeAreaView>  
        <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
              <Text style={styles.HOne}>News about James Webb</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
                <Separator />
                <Button 
                  title='Search'
                  disabled
                  onPress={() => Alert.alert('test')}
                />
          </ImageBackground>
          <StatusBar style="auto" />
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
    fontSize: 52,
    fontWeight: "bold",
    textAlign:"center"
  },
  input: {
     height: 45,
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
