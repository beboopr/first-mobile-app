import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Max'}/>
      <Text style={styles.bigText}>Dimelo!!!!</Text>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: "55vw",
    color: "white",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "darksalmon",
    alignItems: "center",
    justifyContent: "center",
  },
});
