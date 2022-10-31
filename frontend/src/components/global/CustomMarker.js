import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";

// styles
import styles from "../../styles/global/CustomMarker.js";

// icons
import EmptyMarker from "../../../assets/svg/maps/marker.svg";

// context
import { contextProvider } from "../../../Context.js";

const CustomMarker = ({ type, selected }) => {
  // @props
  // type => defines the type for the marker i.e. user or the ambulance
  // selected => defines the status of the marker i.e true or false

  const {
    usr: [user],
  } = useContext(contextProvider);

  return (
    <View style={styles.container}>
      <View style={styles.marker}>
        {type === "ambulance" ? (
          // <AmbulanceMarker />

          <Image
            source={require("../../../assets/imgs/maps/ambulanceMarker.png")}
            style={styles.icon}
          />
        ) : (
          <View style={styles.userMarker}>
            <EmptyMarker />
            {(user?.photo && (
              <Image source={{ uri: user?.photo }} style={styles.userProfile} />
            )) || (
              <Image
                source={require("../../../assets/imgs/maps/defaultProfile.png")}
                style={styles.userProfile}
              />
            )}
          </View>
        )}
      </View>

      {}
    </View>
  );
};

export default CustomMarker;
