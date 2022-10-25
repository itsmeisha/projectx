import { View, Text, TextInput } from "react-native";
import React, { useContext, useEffect } from "react";

// icons
import Search from "../../../assets/svg/search.svg";

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

  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      debounce={400}
      styles={{
        container: {
          height: 45,
          width: 300,
          maxHeight: 45,
          zIndex: 25,
        },
        textInput: {
          elevation: 5,
          borderRadius: 30,
          paddingHorizontal: 20,
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
    />
  );
};

export default Searchbox;
