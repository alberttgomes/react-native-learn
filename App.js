import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FlatList, SafeAreaView } from 'react-native-web';




const DATA = [
  {
    id: '0',
    team: 'Náutico',
    city: 'Recife',
    state: 'PE'
  },
  {
    id: '1',
    team: 'CRB',
    city: 'Maceió',
    state: 'AL'
  },
  {
    id: '2',
    team: 'Fortaleza',
    city: 'Fortaleza',
    state: 'CE'
  },
  {
    id: '3',
    team: 'Sport',
    city: 'Recife',
    state: 'PE'
  }
]

const Team = ({ team }) => {
  const [vote, setVote] = React.useState(null);
  <View style={styles.title}>
    <Text>{team}</Text>
    <Button
      onPress={() => setVote(vote + 1)}
    >
      PRESS {vote}
    </Button>
  </View>
} 



export default function App() {
  
  const renderTeam = ({ team }) => (
    <Team title={team.team} />
  );
  
  return (
      <SafeAreaView style={styles.container}>
        <Text>When will win the Final of the Cup North East?</Text>
        <FlatList
          data={DATA}
          renderItem={renderTeam}
          keyExtractor={team => team.id}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTeam: {
    backgroundColor: "#0000B4",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16    
  },
  title: {
    fontWeight: "bold",
    fontSize: 32
  }
});
