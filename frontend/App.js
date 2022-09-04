import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.safe}>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
