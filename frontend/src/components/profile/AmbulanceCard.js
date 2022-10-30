import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";

//styles
import styles from "../../styles/profile/AmbulanceCard.js";

// icons
import AmbSvg from "../../../assets/svg/profile/ambulance.svg";
import TglBtnOff from "../../../assets/svg/profile/tglBtnOff.svg";
import TglBtnOn from "../../../assets/svg/profile/tglBtnOn.svg";

// context
import { contextProvider } from "../../../Context.js";

const AmbulanceCard = () => {
  const {
    profile: {
      popup: [, setAmbPopup],
      ambulance: [myAmbulance, setMyAmbulnace],
    },
  } = useContext(contextProvider);
  return (
    <View style={styles.container}>
      {/* toggle btn for toggling the ambulance location  */}

      <Pressable
        onPress={() => {
          setMyAmbulnace((previous) => {
            return {
              ...previous,
              status: !previous.status,
            };
          });
        }}
      >
        {myAmbulance?.status ? (
          <TglBtnOn style={styles.tglBtn} />
        ) : (
          <TglBtnOff style={styles.tglBtn} />
        )}
      </Pressable>
      {/* contents */}
      <View style={styles.contents}>
        {/* logo */}
        <AmbSvg style={styles.logo} />

        {/* another column of data */}
        <View style={styles.textCont}>
          <Text style={styles.name}>{myAmbulance?.name}</Text>
          <Text style={[styles.vehicleNumber, styles.secondaryText]}>
            {myAmbulance?.vNumber}
          </Text>
          <Text style={[styles.phoneNumber, styles.secondaryText]}>
            {myAmbulance?.pNumber}
          </Text>
        </View>
      </View>

      {/* edit ambulance btn */}

      <Pressable
        onPress={() => {
          if (!myAmbulance.status) return;
          setAmbPopup("edit");
        }}
      >
        <Text
          style={[
            styles.editBtn,
            myAmbulance.status
              ? null
              : {
                  backgroundColor: "#98B9FF",
                },
          ]}
        >
          Edit Ambulance
        </Text>
      </Pressable>
    </View>
  );
};

export default AmbulanceCard;
