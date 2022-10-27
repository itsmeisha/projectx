import { View, Text } from "react-native";
import React from "react";

//icons
import Achievement from "../../../assets/svg/notification/Achievement.svg";
import LocationAlert from "../../../assets/svg/notification/LocationAlert.svg";
import TrackingAlert from "../../../assets/svg/notification/TrackingAlert.svg";
import Arrival from "../../../assets/svg/notification/Arrival.svg";
import Emmergency from "../../../assets/svg/notification/Emmergency.svg";

const NotificationLogo = ({ type }) => {
  switch (type) {
    case "achievement":
      return <Achievement />;
    case "locationAlert":
      return <LocationAlert />;
    case "trackingAlert":
      return <TrackingAlert />;
    case "arrival":
      return <Arrival />;
    case "emmergency":
      return <Emmergency />;
  }
};

export default NotificationLogo;
