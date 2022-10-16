import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import Context from "./Context";
import HomeScreen from "./src/screens/HomeScreen.js";

import AuthScreen from "./src/screens/auth/AuthScreen.js";

export default function App() {
  return (
    <View>
      <SafeAreaView style={styles.safe}>
        <Context>
          <AuthScreen />
          {/* <HomeScreen /> */}
        </Context>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
