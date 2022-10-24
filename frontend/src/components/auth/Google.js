import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";

// styles
import styles from "../../styles/auth/socialBtns.js";

// packages for google auth
import * as WebBrowser from "expo-web-browser";
import * as GoogleSingIn from "expo-auth-session/providers/google";

// for sending requests
import axios from "axios";

//context
import { contextProvider } from "../../../Context.js";

// for getting the current time
// doj date of joining
import moment from "moment";

// secrets for google auth
import { GOOGLE_CLIENT_ID } from "@env";

// initializes the browser
WebBrowser.maybeCompleteAuthSession();

const Google = ({ navigator }) => {
  // setUser to set the user in the context after successfull auth
  const {
    usr: [user, setUser],
  } = useContext(contextProvider);

  const googleAuth = async () => {
    // triggers google login
    await promptAsync({});
  };

  // states
  const [request, response, promptAsync] = GoogleSingIn.useAuthRequest({
    expoClientId: GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    if (!response) return;
    const { authentication } = response;
    const accessToken = authentication?.accessToken;

    // sending request to google.
    axios
      .get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
      )
      .then((res) => {
        setUser({
          name: res?.data?.name,
          doj: moment().format("MMM Do YY"),
          contact: res?.data?.email,
          photo: res?.data?.picture,
          achievements: [],
          ambulance: {},
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }, [response]);

  useEffect(() => {
    if (Object.keys(user).length === 0) return;
    console.log(user);
    navigator.goBack();
  }, [user]);
  return (
    <Pressable onPress={googleAuth} disabled={!request}>
      <View style={styles.btn}>
        {/* google icon */}
        <Image
          source={require("../../../assets/imgs/auth/googleIcon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </View>
    </Pressable>
  );
};

export default Google;
