import { LogBox } from "react-native";

// context
import Context from "./Context";

// screens
import HomeScreen from "./src/screens/HomeScreen.js";
import AuthScreen from "./src/screens/auth/AuthScreen.js";
import LogScreen from "./src/screens/LogScreen.js";
import ProfileScreen from "./src/screens/ProfileScreen.js";
import NotificationScreen from "./src/screens/NotificationScreen";
import TrackingScreen from "./src/screens/TrackingScreen";

// fonts
import { useFonts } from "expo-font";

// react navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// toast to display msg
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
// styling for the toast
import toastStyles from "./src/styles/global/Toast.js";

// customizing the toast
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={toastStyles.mainContainer}
      contentContainerStyle={toastStyles.container}
      text1Style={toastStyles.txt1}
      text2Style={toastStyles.txt2}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <BaseToast
      {...props}
      style={[toastStyles.mainContainer, toastStyles.error]}
      contentContainerStyle={toastStyles.container}
      text1Style={toastStyles.txt1}
      text2Style={toastStyles.txt2}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={[toastStyles.mainContainer, toastStyles.info]}
      contentContainerStyle={toastStyles.container}
      text1Style={toastStyles.txt1}
      text2Style={toastStyles.txt2}
    />
  ),
};

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

  // removing the warning msgs
  LogBox.ignoreAllLogs();

  return (
    <>
      <Context>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LogScreen"
              component={LogScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NotificationScreen"
              component={NotificationScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TrackingScreen"
              component={TrackingScreen}
              options={{
                animation: "none",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Context>
      <Toast config={toastConfig} autoHide={true} />
    </>
  );
}
