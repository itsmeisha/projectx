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

// for getting the current location
import * as Location from "expo-location";

const Searchbox = () => {
  const {
    map: {
      location: [, setMapLoadLoc],
    },
    ambulances: [ambulances, setAmbulances],
  } = useContext(contextProvider);

  useEffect(() => {
    (async () => {
      //getting permission status
      const { status } = await Location.requestForegroundPermissionsAsync();
      // console.log(status);
      if (status !== "granted") return;

      // getting the current location
      let location = await Location.getCurrentPositionAsync({});

      // pointing the map to the current location
      setMapLoadLoc({
        latitude: location?.coords?.latitude,
        longitude: location?.coords?.longitude,
        latitudeDelta: 0.0021,
        longitudeDelta: 0.0021,
      });

      setAmbulances([
        ...ambulances,
        {
          name: "Hamro ambulance",
          dName: "Isha pun",
          pNumber: "9860712345",
          location: {
            lat: location?.coords?.latitude + 0.00123,
            lng: location?.coords?.longitude + 0.00123,
          },
          owner: "Mutu hospital",
          status: true,
          selected: false,
        },
      ]);

      console.log({
        // lat: location?.coords?.latitude + 0.00123,
        // lng: location?.coords?.longitude + 0.00123,
        lat: 27.685241790001612,
        lng: 83.45853160119125,
      });
    })();
  }, []);

  // for rendering the cross in the inputbox
  const [renderCross, setRenderCross] = useState(false);
  const inputBox = useRef(null);

  // handling the btn press i.e actions btn [search and cross]

  const handleActions = () => {
    if (renderCross) {
      // it means cross btn is pressed so clearing the input feild
      inputBox.current?.clear();
    }
  };

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
        onPress={handleActions}
      >
        {renderCross ? <Cross /> : <Search />}
      </Pressable>
    </GooglePlacesAutocomplete>
  );
};

export default Searchbox;
