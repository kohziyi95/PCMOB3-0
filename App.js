
import { StyleSheet, Text, FlatList } from "react-native";
import { names } from "./name";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const nameAsObjects = names.map((item) => {
  return {
    name: item,
  };
});

function HomeScreen() {
  const renderName = ({ item }) => {
    return <Text style={styles.list}>{item.name}</Text>;
  };

  return (
    <FlatList
      data={nameAsObjects}
      renderItem={renderName}
      keyExtractor={(item) => item.name}
    />
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    backgroundColor: "cyan",
    margin: 8,
    padding: 15,
    borderStyle: "solid", 
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "center",
    width: "75%",
  }
});
