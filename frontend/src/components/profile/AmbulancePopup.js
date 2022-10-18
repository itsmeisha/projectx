import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

// context
import { contextProvider } from "../../../Context";

// components
import Inputer from "./Inputer";

// styles
import styles from "../../styles/profile/AmbulancePopup.js";

const AmbulancePopup = () => {
  const {
    usr: [user, setUser],
    profile: {
      popup: [ambPopup, setAmbPopup],
      ambul: [ambulData, SetAmbData],
    },
  } = useContext(contextProvider);

  const saveAmbulance = () => {
    // updating the profile
    setUser(() => {
      return { ...user, ambulance: { ...ambulData } };
    });
    // closing the popup
    setAmbPopup(false);

    // resetting the data
    SetAmbData({});
  };
  const cancelAmbulance = () => {
    // closing popup
    setAmbPopup(false);

    // reseting the data
    SetAmbData({});
  };
  return (
    <>
      {ambPopup ? (
        <View style={styles.mainContainer}>
          {/* this is the balck background behind the box that will close the window */}
          <Pressable
            onPress={() => {
              setAmbPopup(false);
            }}
            style={styles.closer}
          ></Pressable>
          <View style={styles.container}>
            <View style={styles.contents}>
              <Inputer
                title={"Vehicle Number"}
                placeholder={"L141 /A1341"}
                name={"vNumber"}
              />
              <Inputer
                title={"Name"}
                placeholder={"Lumbini Ambulance"}
                name={"name"}
              />
              <Inputer
                title={"Drivers Name"}
                placeholder={user?.name}
                name={"dName"}
              />
              <Inputer
                title={"Contact Number"}
                placeholder={"9867******"}
                name={"pNumber"}
              />

              {/* action buttons               */}

              <View style={styles.btns}>
                <Pressable onPress={saveAmbulance}>
                  <Text style={[styles.save, styles.btn]}>Save</Text>
                </Pressable>

                <Pressable onPress={cancelAmbulance}>
                  <Text style={[styles.cancel, styles.btn]}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default AmbulancePopup;
