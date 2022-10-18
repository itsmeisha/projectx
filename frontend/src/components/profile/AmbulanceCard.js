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

const AmbulanceCard = ({ data }) => {
  const {
    profile: {
      popup: [, setAmbPopup],
    },
  } = useContext(contextProvider);

  return (
    <View style={styles.container}>
      {/* toggle btn for toggling the ambulance location  */}
      <TglBtnOn style={styles.tglBtn} />

      {/* contents */}
      <View style={styles.contents}>
        {/* logo */}
        <AmbSvg style={styles.logo} />

        {/* another column of data */}
        <View style={styles.textCont}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={[styles.vehicleNumber, styles.secondaryText]}>
            {data.vehicleNumber}
          </Text>
          <Text style={[styles.phoneNumber, styles.secondaryText]}>
            {data.phoneNumber}
          </Text>
        </View>
      </View>

      {/* edit ambulance btn */}

      <Pressable
        onPress={() => {
          setAmbPopup("edit");
        }}
      >
        <Text style={styles.editBtn}>Edit Ambulance</Text>
      </Pressable>
    </View>
  );
};

export default AmbulanceCard;
