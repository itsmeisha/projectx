import { View, Image, Pressable } from "react-native";
import React, { useContext } from "react";

// styles
import home from "../../styles/home/home";

// icons
import Menu from "./../../../assets/svg/menu.svg";
import Notif from "./../../../assets/svg/notification.svg";
import Golo from "./../../../assets/svg/golo.svg";

// context
import { contextProvider } from "../../../Context";

const UpperNav = ({ navigator }) => {
  const {
    usr: [user],
  } = useContext(contextProvider);

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
          <Golo style={[home.profileItem]} />
          {user?.photo ? (
            <Image
              source={{ uri: user?.photo }}
              style={[
                {
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  marginLeft: -5,
                  marginTop: 3,
                },
              ]}
            />
          ) : (
            <Image
              source={require("../../../assets/imgs/maps/defaultProfile.png")}
              style={[
                {
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  marginLeft: -5,
                  marginTop: 3,
                },
              ]}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default UpperNav;
