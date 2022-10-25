import { View, Text, TextInput, Pressable } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

// icons
import Search from "../../../assets/svg/search.svg";
import Cross from "../../../assets/svg/cross.svg";

//styles
import styles from "./../../styles/home/search.js";

// utils
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// api
import { GOOGLE_MAP_API_KEY } from "@env";

//context
import { contextProvider } from "../../../Context";

// configuration for the googleplacesautcomplete to get the current location

import * as Location from "expo-location";

const Searchbox = () => {
  const {
    map: {
      location: [, setMapLoadLoc],
    },
  } = useContext(contextProvider);

  useEffect(() => {
    (async () => {
      // requesting for permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      let location = await Location.getCurrentPositionAsync({});

      // pointing the map to the current location
      setMapLoadLoc({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0021,
        longitudeDelta: 0.0021,
      });
    })();
  }, []);

  // for rendering the cross in the inputbox
  const [renderCross, setRenderCross] = useState(true);
  const inputBox = useRef(null);
  // setInterval(() => {
  //   console.log(inputBox.current?.isFocused());
  //   if (inputBox.current?.isFocused()) {
  //     setRenderCross(true);
  //     return;
  //   }
  //   setRenderCross(false);
  // }, 100);

  return (
    <GooglePlacesAutocomplete
      placeholder="Find Ambulance"
      debounce={400}
      styles={{
        container: {
          height: 45,
          width: "100%",
          maxHeight: 45,
          zIndex: 25,
          position: "relative",
        },
        textInput: {
          elevation: 5,
          borderRadius: 30,
          paddingHorizontal: 20,
          paddingRight: 60,
          paddingTop: 8,
          fontFamily: "poppins-r",
          color: "#999999",
        },
        listView: {
          elevation: 5,
          position: "absolute",
          marginTop: 55,
        },
      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      nearbyPlacesAPI={"GooglePlacesSearch"}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setMapLoadLoc({
          latitude: details?.geometry?.location?.lat,
          longitude: details?.geometry?.location?.lng,
          latitudeDelta: 0.0021,
          longitudeDelta: 0.0021,
        });
      }}
      query={{
        key: GOOGLE_MAP_API_KEY,
        language: "en",
      }}
      textInputProps={{
        onFocus: () => {
          setRenderCross(true);
        },
        onblur: () => {
          setRenderCross(false);
        },
      }}
      ref={inputBox}
    >
      <Pressable
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          // backgroundColor: "#333",
          height: 45,
          display: "flex",
          justifyContent: "center",
          width: 60,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          alignItems: "center",
        }}
      >
        {renderCross ? <Cross /> : <Search />}
      </Pressable>
    </GooglePlacesAutocomplete>
  );
};

export default Searchbox;
