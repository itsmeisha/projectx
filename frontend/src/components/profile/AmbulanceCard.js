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
    usr: [user, setUser],
    profile: {
      popup: [, setAmbPopup],
    },
  } = useContext(contextProvider);

  return (
    <View style={styles.container}>
      {/* toggle btn for toggling the ambulance location  */}

      <Pressable
        onPress={() => {
          setUser({
            ...user,
            ambulance: {
              ...user?.ambulance,
              trackable: !user?.ambulance?.trackable,
            },
          });
        }}
      >
        {user?.ambulance?.trackable ? (
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
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={[styles.vehicleNumber, styles.secondaryText]}>
            {data?.vNumber}
          </Text>
          <Text style={[styles.phoneNumber, styles.secondaryText]}>
            {data?.pNumber}
          </Text>
        </View>
      </View>

      {/* edit ambulance btn */}

      <Pressable
        onPress={() => {
          if (!user?.ambulance?.trackable) return;
          setAmbPopup("edit");
        }}
      >
        <Text
          style={[
            styles.editBtn,
            user?.ambulance?.trackable
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
