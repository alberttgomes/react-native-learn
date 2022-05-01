import React from "react";
import { View,
         Text, 
         TextInput, 
         Button, 
         SafeAreaView, 
         StyleSheet } from "react-native";
         
import { QueryClient, QueryClientProvider, useMutation } from "react-query"

import axios from "axios";
 

const PostOperation = () => {
    const token = "eca2552411048cdb522b077e3a6a9ec3ca6f05ef7f1938608da73d22e24bd050";

    const api = axios.create({
        baseURL:"https://gorest.co.in/public/v2/",
        headers:{
            'Contente-type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json' 
        }
    });

    const [input, setInput] = React.useState({
        name:"",
        email:"",
        gender:"",
        status:""
    });
    
    const post = async (data) => {
        const resul = await api.post(`users`, data).then(res => res);
        return resul;
    }

    const {mutate} = useMutation(post, {});

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Track React Native Post</Text>
            <View style={styles.boxInput}>
                <TextInput
                    style={styles.input}
                    value={input.name}
                    onChangeText={value => setInput({...input,name:value})}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={input.email}
                    onChangeText={value => setInput({...input,email:value})}
                    placeholder="E-mail"
                />
                 <TextInput
                    style={styles.input}
                    value={input.gender}
                    onChangeText={value => setInput({...input,gender:value})}
                    placeholder="Gender"
                />
                <TextInput
                    style={styles.input}
                    value={input.status}
                    onChangeText={value => setInput({...input,status:value})}
                    placeholder="Status"
                />
            </View>
            <View>
                <Button
                    onPress={() => mutate(input)}
                    title="Press"
                    color="#841584"
                />
            </View>
        </SafeAreaView>    
    )
}

const Provider = () => {
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>
            <PostOperation />
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center"
    },
    text:{
        fontSize:30,    
        fontWeight:"bold",
    },
    input: {
        height:50,
        width:300,
        margin:12,
        borderWidth:1,
        padding:10
    },
    boxInput:{
        justifyContent: "center",
    }
});

export default Provider;

