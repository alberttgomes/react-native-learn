import React from "react";
import { View,
         Text, 
         TextInput, 
         Button, 
         SafeAreaView, 
         StyleSheet } from "react-native";
         
import { QueryClient, QueryClientProvider, useMutation } from "react-query"

import axios from "axios";

const token = "eca2552411048cdb522b077e3a6a9ec3ca6f05ef7f1938608da73d22e24bd050";

const api = axios.create({
    baseURL:"https://gorest.co.in/public/v2/",
    headers:{
        "Contente-type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}); 


const PostOperation = () => {
    const [id, setId] = React.useState(null);
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState("active");
    
    const { mutate: postData } = useMutation(
        async () => {
            return await api.post(`users`, {
                id: id,
                name: name,
                gender: gender,
                email: email,
                status: status
            })
            .then((res) => res.json());
        }
    );

    const persisteData = () => {
        try{
            postData();
            if(postData.ok){
                alert("Date save with success!");
                setId(null);
                setName("");
                setGender("");
                setEmail("");
                setStatus("inactive");
            }
        } catch(err) {
            console.error("Something wrong happened! ", err);
            alert(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Track React Native Post</Text>
            <View style={styles.boxInput}>
                <TextInput
                    style={styles.input}
                    value={id}
                    onChangeText={setId}
                    placeholder="Write your id here"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Write your name here"
                />
                <TextInput
                    style={styles.input}
                    value={gender}
                    onChangeText={setGender}
                    placeholder="Write your gender here"
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Write your email here"
                />
            </View>
            <View>
                <Button
                    onPress={persisteData}
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

