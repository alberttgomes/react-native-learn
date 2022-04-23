import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useQuery } from "react-query";
import axios from "axios";

import { useTheme } from "react-native-paper";

export const People = () => {
  const token = '4852a22b69b8706a49ea608ae44f37b4f3ec7535fdd4fb84e76a5e59b4005733'
  
  const config = {
    headers: {
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'application/json',
        'Accept' : 'application/json' 
    }
  }

  const { isLoading, error, data, isFetching } = useQuery("people-2", () =>
    axios.get("https://gorest.co.in/public/v2/users", config)
        .then((res) => res.data)
        .then((data) => {
            console.log(data);
        })
  );

  if (isLoading) return <Text>Loading...</Text>;

  if (error) return <Text>An error has occurred: {error.message}</Text>;

  const { colors } = useTheme();

  return (
    <ScrollView>
      {data &&
          data.map((user,index) => (
              <View key={index} style={styles.container}>
                  <Text 
                    style={{fontWeight:'bold', fontSize: 30, color:colors.primary}}
                  >
                    Name {user.name}
                  </Text>
                      <Divider />
                  <Text 
                    style={{fontWeight:'bold', fontSize: 30, color: colors.accent}}
                  >
                    E-mail {user.email}
                  </Text>
                      <Divider />
                  <View>
                      <Text>{isFetching ? "Update .." : " .."}</Text>
                  </View>
              </View>
          ))}
    </ScrollView>
  );
};