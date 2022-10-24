import { View, Text, TextInput } from "react-native";
import React, { useContext } from "react";

// icons
import Search from "../../../assets/svg/search.svg";

//styles
import styles from "./../../styles/home/search.js";

// utils
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// api
import { GOOGLE_MAP_API_KEY } from "@env";
import { contextProvider } from "../../../Context";

const Searchbox = () => {
  const {
    map: {
      location: [, setMapLoadLoc],
    },
  } = useContext(contextProvider);

  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      debounce={400}
      currentLocation={true}
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
        console.log({
          latitude: details?.geometry?.location?.lat,
          longitude: details?.geometry?.location?.lng,
        });
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
