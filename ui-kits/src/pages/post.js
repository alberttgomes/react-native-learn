import React from "react";
import { StyleSheet, View, SafeAreaView, TextInput, } from "react-native";

import { useMutation } from "react-query";

import { NativeBaseProvider } from 'native-base';

import { Button, Divider } from "react-native-paper";


export const PagePost = () => {
    const [input, setInput] = React.useState({
         name:"",
         email:"",
         gender:"",
         status:""
    });

    let token = '4852a22b69b8706a49ea608ae44f37b4f3ec7535fdd4fb84e76a5e59b4005733 ';

    const config = {
        headers: {
            'Authorization' : `Bearer ${token}`,
                'Content-Type' : 'application/json',
                'Accept' : 'application/json' 
        }
    }

  const Item = async (item) =>{
    const resul = await axios.post("https://gorest.co.in/public/v2/users",item,config)
        .then((res) => res)
        .then((data) => {
            console.log(data);
    });
    return resul; 
  }

  const { mutate } = useMutation(Item,{});

  return ( 
    <NativeBaseProvider>
        <SafeAreaView style={styles.tela}>
            <View style={styles.container}>
                <Card>
                    <Text>Request Post Register</Text>
                </Card>

                <TextInput
                    style={styles.input}
                    value={input.name}
                    onChangeText={(value) => setInput({...input,name:value})}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={input.email}
                    onChangeText={(value) => setInput({...input,email:value})}
                    placeholder="E-mail"
                />
                <TextInput
                    style={styles.input}
                    value={input.gender}
                    onChangeText={(value) => setInput({...input,gender:value})}
                    placeholder="Gender"
                />
                <TextInput
                    style={styles.input}
                    value={input.status}
                    onChangeText={(value) => setInput({...input,status:value})}
                    placeholder="Status"
                />

                <Divider />
                
                <Button 
                   mode='outlined' 
                   icon='camera'
                   onPress={() => mutate(input)}
                >
                    Register
                </Button>
            </View>
        </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});