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
import axios from "axios";

const GoogleMap = ({ customStyles }) => {
  const {
    usr: [user],
    map: {
      location: [mapLoadLoc, setMapLoadLoc],
      userLoc: [currentLocation],
      ambulance: [selectedAmbul, setSelectedAmbul],
      tracking: [data, setData],
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
    if (!selectedAmbul?.userId || !currentLocation) return;

    console.log("Fitting to screen");
    // showing the entire route in the screen
    // map.current?.fitToSuppliedMarkers([selectedAmbul?.userId, "userMarker"], {
    //   edgePadding: {
    //     top: 800,
    //     bottom: 400,
    //     left: 100,
    //     right: 100,
    //   },
    // });

    const center = {
      latitude: selectedAmbul?.location?.latitude + currentLocation?.latitude,
      longitude:
        selectedAmbul?.location?.longitude + currentLocation?.longitude,
    };

    map.current.animateCamera(
      {
        center,
      },
      2000
    );

    const timeOut = setTimeout(() => {
      map.current?.animateToRegion(
        {
          ...selectedAmbul.location,
          latitudeDelta: 0.00081,
          longitudeDelta: 0.00081,
        },
        800
      );
    }, 5000);
    // zoom in to the ambulance marker

    // getting the actual distance of the user from the selected ambulance
    const reqUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${selectedAmbul?.location?.latitude},${selectedAmbul?.location?.longitude}&destinations=${currentLocation?.latitude},${currentLocation?.longitude}&key=${GOOGLE_MAP_API_KEY}`;
    axios
      .get(reqUrl)
      .then((res) => {
        setData((prev) => {
          return {
            ...prev,
            distance: res.data.rows[0]?.elements[0]?.distance?.text,
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });

    // clearing the timeout to prevent the memory leaks
    return () => {
      clearTimeout(timeOut);
    };
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
        // setMapLoadLoc({ ...region });
      }}
      ref={map}
      toolbarEnabled={false}
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
              style={{
                height: 200,
                width: 200,
                // backgroundColor: "red",
              }}
              tracksViewChanges={false}
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
            strokeColor={"#616161"}
            lineDashPattern={[50, 20]}
            lineCap={"butt"}
          />
        )}
    </MapView>
  );
};

export default GoogleMap;
