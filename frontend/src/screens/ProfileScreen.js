import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";

// components
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import ProfileCard from "../components/profile/ProfileCard.js";
import AmbulanceCard from "../components/profile/AmbulanceCard.js";

// styles
import styles from "../styles/profile/ProfileScreen.js";

// Context
import { contextProvider } from "../../Context";
import AmbulancePopup from "../components/profile/AmbulancePopup";

const ProfileScreen = ({ navigation }) => {
  const {
    usr: [user, setUser],
  } = useContext(contextProvider);

  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          height: "100%",
        }}
      >
        <Header navigator={navigation} heading={user.name} />
        <ScrollView>
          <View style={styles.container}>
            <ProfileCard data={user} />
            {user?.ambulance ? (
              <>
                <Text style={styles.ownedAmb}>Ambulances owned</Text>
                <AmbulanceCard data={user?.ambulance} />
              </>
            ) : (
              <Pressable>
                <Text style={styles.addAmbulance}>Add Ambulance</Text>
              </Pressable>
            )}
          </View>
        </ScrollView>
        <AmbulancePopup />
        <Nav active={"ProfileScreen"} navigator={navigation} />
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
