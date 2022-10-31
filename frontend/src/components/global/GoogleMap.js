import React, { useContext, useEffect, useRef } from "react";

// styles
import styles from "../../styles/tracking/GoogleMap.js";
import { customMapStyles } from "../../styles/tracking/customMapStyles.js";

//components
import CustomMarker from "./CustomMarker.js";

// context
import { contextProvider } from "../../../Context.js";

// utilities
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

// api key
import { GOOGLE_MAP_API_KEY } from "@env";
import { Pressable } from "react-native";

const GoogleMap = ({ customStyles }) => {
  const {
    usr: [user],
    map: {
      location: [mapLoadLoc, setMapLoadLoc],
      userLoc: [currentLocation],
      ambulance: [selectedAmbul, setSelectedAmbul],
    },
    ambulances: [ambulances],
  } = useContext(contextProvider);

  // creating a map reference

  const map = useRef(null);

  useEffect(() => {
    if (!currentLocation.latitude || currentLocation.longitude) return;
    setMapLoadLoc({
      ...currentLocation,
      latitudeDelta: 0.0021,
      longitudeDelta: 0.0021,
    });
  }, [currentLocation]);

  // for testing purposes

  useEffect(() => {
    if (!selectedAmbul?.userId) return;
    console.log({ googleMap: selectedAmbul });
    //  console.log({ mine: ambulance?.userId === user?.id });
  }, [selectedAmbul]);
  // console.log("running");
  return (
    <MapView
      style={[
        styles.map,
        customStyles && {
          height: customStyles?.height,
          width: customStyles?.width,
        },
      ]}
      customMapStyle={customMapStyles}
      provider={PROVIDER_GOOGLE}
      mapPadding={{
        top: 125,
        right: 10,
      }}
      showsMyLocationButton={true}
      region={mapLoadLoc}
      onRegionChangeComplete={(region) => {
        setMapLoadLoc({ ...region });
      }}
      ref={map}
    >
      {/* mapping out the ambulances */}
      {ambulances?.length > 0 &&
        ambulances?.map((ambulance, index) => {
          //  if (ambulance?.userId === user?.id) {
          //   console.log("found my ambulance about to be mapped", index);
          //   return;

          return (
            <Marker
              title={ambulance?.name}
              identifier={ambulance?.userId}
              coordinate={ambulance?.location}
              key={index}
              onPress={() => {
                setSelectedAmbul({ ...ambulance });
              }}
            >
              <CustomMarker
                type={"ambulance"}
                selected={selectedAmbul?.userId === ambulance?.userId}
              />
            </Marker>
          );
        })}

      {/* making the custom user marker */}
      {currentLocation?.latitude && currentLocation?.longitude && (
        <Marker
          title={user?.name || "User"}
          identifier={"userMarker"}
          coordinate={currentLocation}
        >
          <CustomMarker type={"user"} selected={false} />
        </Marker>
      )}

      {/* route from a active ambulance to the user */}
      {currentLocation?.latitude &&
        currentLocation?.longitude &&
        selectedAmbul?.location && (
          <MapViewDirections
            apikey={GOOGLE_MAP_API_KEY}
            origin={currentLocation}
            destination={selectedAmbul?.location}
            strokeWidth={3}
            strokeColor={"#333"}
          />
        )}
    </MapView>
  );
};

export default GoogleMap;
