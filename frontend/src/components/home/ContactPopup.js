import { View, Text, Pressable, Linking } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/home/ContactPopup.js";

//context
import { contextProvider } from "../../../Context.js";

//icons
import CallIcon from "../../../assets/svg/home/callNow.svg";

const ContactPopup = () => {
  const {
    contact: [conPopup, setConPopup],
    map: {
      ambulance: [selectedAmbul],
    },
  } = useContext(contextProvider);
  if (!selectedAmbul) return;

  return (
    <>
      {conPopup ? (
        <>
          <Pressable
            onPress={() => {
              setConPopup(false);
            }}
            style={styles.closer}
          ></Pressable>
          <View style={styles.container}>
            <Text style={styles.number}>{selectedAmbul.number}</Text>
            <Text style={styles.name}>{selectedAmbul.name}</Text>
            {/* for closing the popup */}
            <Pressable
              onPress={() => {
                Linking.openURL(`tel:${selectedAmbul.number}`);
              }}
            >
              <View style={styles.callNow}>
                <Text style={styles.text}>Call Now</Text>
                <CallIcon style={styles.icon} />
              </View>
            </Pressable>
          </View>
        </>
      ) : null}
    </>
  );
};

export default ContactPopup;
