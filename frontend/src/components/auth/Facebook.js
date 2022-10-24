import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";

// styles
import styles from "../../styles/auth/socialBtns.js";

// packages for facebook auth
import * as WebBrowser from "expo-web-browser";
import * as FacebookAuthProvider from "expo-auth-session/providers/facebook";
import * as AuthSession from "expo-auth-session";

// for sending requests
import axios from "axios";

//context
import { contextProvider } from "../../../Context.js";

// for getting the current time
// doj date of joining
import moment from "moment";

// secrets for facebook auth
import { FACEBOOK_CLIENT_ID } from "@env";

// initializes the browser
WebBrowser.maybeCompleteAuthSession();

const Facebook = ({ navigator }) => {
  // setUser to set the user in the context after successfull auth
  const {
    usr: [user, setUser],
  } = useContext(contextProvider);

  const facebookAuth = async () => {
    // triggers google login
    // try {
    //   await fb.initializeAsync({
    //     appId: webClientId,
    //   });
    //   const { type, token } = await fb.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile"],
    //   });
    //   if (type === "success") {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );
    //     const { id } = await response.json();
    //     console.log(id);
    //   } else {
    //     // type === 'cancel'
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }

    await promptAsync();
  };

  // states
  const [request, response, promptAsync] = FacebookAuthProvider.useAuthRequest(
    {
      clientId: FACEBOOK_CLIENT_ID,
      redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
      scopes: ["public_profile"],
    },

    { useProxy: true }
  );

  useEffect(() => {
    if (response?.type !== "success") return;

    const { accessToken } = response?.authentication;

    // sending request to google.
    axios
      .get(
        `https://graph.facebook.com/me?fields=name,email,picture.type(large)&access_token=${accessToken}`
      )
      .then((res) => {
        setUser({
          name: res?.data?.name,
          doj: moment().format("MMM Do YY"),
          contact: res?.data?.email,
          photo: res?.data?.picture?.data?.url,
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
    <Pressable onPress={facebookAuth} disabled={!request}>
      <View style={[styles.btn, { marginTop: 20 }]}>
        {/* Facebook icon */}
        <Image
          source={require("../../../assets/imgs/auth/facebookIcon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Continue with Facebook</Text>
      </View>
    </Pressable>
  );
};

export default Facebook;
