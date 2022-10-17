import { StyleSheet, View, SafeAreaView, Platform } from "react-native";

// context
import Context from "./Context";

// screens
import HomeScreen from "./src/screens/HomeScreen.js";
import AuthScreen from "./src/screens/auth/AuthScreen.js";

// fonts
import { useFonts } from "expo-font";

// react navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // -----------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------
  // loading the custom fonts -------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------

  const [loaded] = useFonts({
    "poppins-r": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-b": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-eb": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-l": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-sb": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-t": require("./assets/fonts/Poppins-Thin.ttf"),
    "poppins-m": require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) return;

  // navigation stack
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <SafeAreaView style={styles.safe}>
        <Context>
          <HomeScreen />
        </Context>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // safe area view for the android

  safe: {
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
