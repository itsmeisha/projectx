import { View, Image, Pressable } from "react-native";
import React from "react";

// styles
import home from "../../styles/home/home";

// icons
import Menu from "./../../../assets/svg/menu.svg";
import Notif from "./../../../assets/svg/notification.svg";
import Golo from "./../../../assets/svg/golo.svg";

const UpperNav = ({ navigator }) => {
  return (
    <View style={home.navCon}>
      <View style={home.navItem}>
        <Menu />
      </View>
      <View style={home.rightNavItems}>
        <Pressable
          onPress={() => {
            navigator.navigate("NotificationScreen");
          }}
        >
          <View style={home.navItem}>
            <Notif />
          </View>
        </Pressable>
        <View style={home.profile}>
          <Golo style={home.profileItem} />
          <Image
            source={require("../../../assets/imgs/profile.png")}
            style={[
              {
                width: 55,
                height: 55,
                borderRadius: 55 / 2,
              },
              home.profileItem,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default UpperNav;
