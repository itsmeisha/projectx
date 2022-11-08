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

// utilities
import Toast from "react-native-toast-message";

// initializes the browser
WebBrowser.maybeCompleteAuthSession();

const Google = ({ navigator }) => {
  // setUser to set the user in the context after successfull auth
  const {
    usr: [user, setUser],
    config: { api },
  } = useContext(contextProvider);

  const googleAuth = async () => {
    // triggers google login
    await promptAsync({});
  };
  const registerUser = (data) => {
    axios
      .post(`${api}/api/v1/auth/register/`, {
        id: data?.sub,
        name: data?.name,
        doj: moment().format("MMM Do YY").toString(),
        contact: data?.email,
        photo: data?.picture,
        achievements: [],
        ambulance: {},
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data?.user);
          Toast.show({
            type: "success",
            text1: "successful registeration",
            text2: `Logged in as ${res?.data?.user?.name}`,
          });
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
          registerUser(data);
        }
      });
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
        const id = res?.data?.sub;
        const data = res?.data;

        console.log({
          id,
        });
        handleApiRequests(id, data);
      })
      .catch((e) => {
        console.error("Google login error", e?.response?.message);
      });
  }, [response]);

  useEffect(() => {
    if (user && Object.keys(user).length === 0) return;

    navigator.navigate("HomeScreen");
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
