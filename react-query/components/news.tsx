import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { ScrollView, Text, View, Image } from "react-native";

export const NasaEpic = () => {
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
        <ScrollView>
                {!!data &&
                data.map((index: any) => (
                    <View>
                        <Image source={index.image}></Image>
                        {/* <Text>Most Recent Natural: {...index.natural}</Text>,
                        <Text>Dates for Natural Color: {...index.natural.all}</Text>,
                        <Text>Dates for Enhanced Imagery: {...index.enhanced.all}</Text> */}
                    </View>
                ))}                  
        </ScrollView>
   );

}

export default NasaEpic;