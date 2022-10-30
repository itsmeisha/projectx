import { View, Text, TextInput } from "react-native";
import React, { useContext } from "react";

// context
import { contextProvider } from "../../../Context";

// styles
import styles from "../../styles/profile/Inputer.js";

const Inputer = ({ name, placeholder, title }) => {
  const {
    profile: {
      ambul: [ambulData, SetAmbData],
      ambulance: [myAmbulance],
    },
  } = useContext(contextProvider);

  const handleChange = (change) => {
    SetAmbData({
      ...ambulData,
      [name]: change,
    });
  };

  console.log({
    [name]: {
      api: myAmbulance[name],
      changes: ambulData[name],
      query: ambulData && Object.keys(ambulData).includes(name),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange}
        value={
          ambulData && Object.keys(ambulData).includes(name)
            ? ambulData[name]
            : myAmbulance[name]
        }
        style={styles.input}
      />
    </View>
  );
};

export default Inputer;
