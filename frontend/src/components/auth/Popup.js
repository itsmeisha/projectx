import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

// social auth provider
import Facebook from "./Facebook";
import Google from "./Google";

const Popup = ({ popupMode }) => {
  // the value of the popupMode prop can be either registeration or login

  const [status, setStatus] = useState(false);

  return (
    <View>
      {status ? (
        <View>
          {/* this contains the title and the close btn */}
          <View>
            {/* conditionally rendered title */}
            <Text>
              {popupMode === "registeration"
                ? "Register account using,"
                : "Continue login with,"}
            </Text>

            <Pressable
              onPress={() => {
                setStatus(false);
              }}
            >
              {/* Btn logo */}
            </Pressable>
          </View>

          {/* this is the continue with socials container */}
          <View>
            {/* this contains signin with google and signup with google */}
            <Google popupMode />

            {/* this contains signin with facebook and signup with facebook */}
            <Facebook popupMode />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Popup;
