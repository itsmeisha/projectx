import { View, Text, Image } from "react-native";
import React from "react";
import home from "../../styles/home";

import Menu from "./../../../assets/svg/menu.svg";
import Notif from "./../../../assets/svg/notification.svg";
import Golo from "./../../../assets/svg/golo.svg";

const UpperNav = () => {
  return (
    <View style={home.navCon}>
      <View style={home.navItem}>
        <Menu />
      </View>
      <View style={home.rightNavItems}>
        <View style={home.navItem}>
          <Notif />
        </View>
        <View style={home.profile}>
          <Image
            source={require("../../../assets/imgs/profile.png")}
            style={[
              {
                width: 50,
                height: 50,
                borderRadius: 25,
              },
              home.profileItem,
            ]}
          />
          <View style={home.profileItem}>
            <Golo />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpperNav;
