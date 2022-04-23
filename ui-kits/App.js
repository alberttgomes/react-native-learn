import React, { useState } from "react";
import { StyleSheet, Switch, View} from "react-native";

import { DefaultTheme, Divider, Provider as PaperProvider } from 'react-native-paper';

import { QueryClient, QueryClientProvider } from "react-query";

import { Appearance } from 'react-native';

import PageGet from './src/pages/get';
import PagePost from './src/pages/post';


const queryClient = new QueryClient();

const light = {
  ...DefaultTheme,
  roundness:2,
  colors:{
      ...DefaultTheme.colors,
      background: '#FFF',
      primary: '#131313',
      accent: '#9B0054',
      danger: '#Ed1c24'
  }
};

const dark = {
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme.colors,
    background: '#131313',
    primary: '#FFF',
    accent: '#9B0054',
    danger: '#Ed1c24'
  }
};

const colorSheme = Appearance.getColorScheme();

export default function App() {
  console.log(colorSheme);
 
  const [showData, setShowData] = useState(true);

  return (   
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <PaperProvider theme={colorSheme === 'dark' ? dark : light}>
          <Card>
             <Text style={{fontSize:30, fontWeight:'bold'}}>Go Thoughts</Text>
          </Card>
           <Divider />
           <Card>
              <Switch
                value={showData}
                onValueChange={() => setShowData(!showData)}
              />
              {showData ? <PageGet /> : <PagePost />}
           </Card>
        </PaperProvider>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
