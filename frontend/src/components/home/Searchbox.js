import { View, Text, TextInput, Pressable } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";

// icons
import Search from "../../../assets/svg/search.svg";
import Cross from "../../../assets/svg/cross.svg";

// styles
import styles from "../../styles/home/search.js";

// utils
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// api
import { GOOGLE_MAP_API_KEY } from "@env";

//context
import { contextProvider } from "../../../Context";

const Searchbox = () => {
  const {
    map: {
      location: [, setMapLoadLoc],
    },
  } = useContext(contextProvider);

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
      styles={styles.googleSearchBox}
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
      <Pressable style={styles.action} onPress={handleActions}>
        {renderCross ? <Cross /> : <Search />}
      </Pressable>
    </GooglePlacesAutocomplete>
  );
};

export default Searchbox;
