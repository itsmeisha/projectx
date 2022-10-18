import { View, Text, TextInput } from "react-native";
import React, { useContext, useEffect } from "react";

// context
import { contextProvider } from "../../../Context";

import styles from "../../styles/profile/Inputer.js";

const Inputer = ({ name, placeholder, title }) => {
  const {
    usr: [user],
    profile: {
      ambul: [ambulData, SetAmbData],
    },
  } = useContext(contextProvider);

  const handleChange = (change) => {
    SetAmbData({
      ...ambulData,
      [name]: change,
    });
  };

  // to sync the ambulance data that is available in the context to the ambulance data state
  // useEffect(() => {
  //   SetAmbData(() => {
  //     if (user?.ambulance[name]) return { ...ambulData };
  //     return { ...ambulData, [name]: user?.ambulance[name] };
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(ambulData);
  // }, [ambulData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange}
        value={
          Object.keys(ambulData).includes(name)
            ? ambulData[name]
            : user.ambulance[name]
        }
        style={styles.input}
      />
    </View>
  );
};

export default Inputer;