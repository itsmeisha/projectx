import React, { useContext, useEffect } from "react";

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

const GoogleMap = ({ customStyles }) => {
  const {
    map: {
      location: [mapLoadLoc, setMapLoadLoc],
      userLoc: [currentLocation],
    },
    ambulances: [ambulances],
  } = useContext(contextProvider);

  useEffect(() => {
    if (!currentLocation.latitude || currentLocation.longitude) return;
    setMapLoadLoc({
      ...currentLocation,
      latitudeDelta: 0.0021,
      longitudeDelta: 0.0021,
    });
  }, [currentLocation]);

  return (
    <MapView
      initialRegion={mapLoadLoc}
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
    >
      {/* mapping out the ambulances */}
      {ambulances?.length > 0 &&
        ambulances?.map((ambulance, index) => {
          return (
            <Callout onPress={() => {}} key={index}>
              <Marker
                title={ambulance?.name}
                identifier={"first marker"}
                coordinate={
                  ambulance?.location || {
                    latitude: 27.631432412341326,
                    longitude: 83.45943214132444,
                  }
                }
              >
                <CustomMarker type={"ambulance"} selected={false} />
              </Marker>
            </Callout>
          );
        })}

      {/* making the custom user marker */}
      {currentLocation.latitude && currentLocation.longitude && (
        <Marker
          title={"My marker"}
          identifier={"secondMarker"}
          coordinate={currentLocation}
        >
          <CustomMarker type={"user"} selected={false} />
        </Marker>
      )}

      {/* route from a active ambulance to the user */}
      {currentLocation.latitude &&
        currentLocation.longitude &&
        ambulances[0] && (
          <MapViewDirections
            apikey={GOOGLE_MAP_API_KEY}
            origin={currentLocation}
            destination={ambulances[0]?.location}
            strokeWidth={3}
            strokeColor={"#333"}
          />
        )}
    </MapView>
  );
};

export default GoogleMap;
