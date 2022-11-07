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

// utilities
import Toast from "react-native-toast-message";

// initializes the browser
WebBrowser.maybeCompleteAuthSession();

const Facebook = ({ navigator }) => {
  // setUser to set the user in the context after successfull auth
  const {
    usr: [user, setUser],
    config: { api },
  } = useContext(contextProvider);

  const facebookAuth = async () => {
    await promptAsync();
  };

  const registerUser = (data, id) => {
    axios
      .post(`${api}/api/v1/auth/register/`, {
        id,
        name: data?.name,
        doj: moment().format("MMM Do YY").toString(),
        contact: data?.email,
        photo: data?.picture?.data?.url,
        achievements: [],
        ambulance: {},
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data?.user);
          Toast.show({
            type: "success",
            text1: "successful Registeration",
            text2: `Logged in as ${res?.data?.user?.name}`,
          });
          console.log("from below the toast");
        }
      });
  };
  const handleApiRequests = (id, data) => {
    // checking the existance of the user
    axios
      .post(`${api}/api/v1/auth/checkexistance/`, {
        id: id,
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data?.user);
          Toast.show({
            type: "success",
            text1: "successful login",
            text2: `Logged in as ${res?.data?.user?.name}`,
          });
        }
      })
      .catch((e) => {
        // it means the user doesnot exist so it should be a new user registeration
        if (e.response && e.response?.status === 404) {
          registerUser(data, id);
        }
      });
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
        `https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${accessToken}`
      )
      .then((res) => {
        const contactInfo = res?.data?.id;

        const data = res?.data;

        console.log({
          contactInfo,
          res: res?.data,
        });
        handleApiRequests(contactInfo, data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [response]);

  useEffect(() => {
    if (user && Object.keys(user).length === 0) return;

    navigator.navigate("HomeScreen");
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
