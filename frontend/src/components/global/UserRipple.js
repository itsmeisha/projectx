import { useState } from "react";
import { View, Animated } from "react-native";
// import {  } from "react-native";

// styles
import styles from "../../styles/global/AmbulanceRipple.js";

const UserRipple = () => {
  const [rippleAnimation] = useState({
    circleOne: {
      height: new Animated.Value(0),
      width: new Animated.Value(0),
      opacity: new Animated.Value(1),
    },
    circleTwo: {
      height: new Animated.Value(0),
      width: new Animated.Value(0),
      opacity: new Animated.Value(1),
    },
  });

  const animationDuration = 1500;

  const maxHeight = 18;
  const maxWidth = 108;
  const delay = 500;

  const CircleOne = {
    heightAnimation: Animated.timing(rippleAnimation.circleOne.height, {
      toValue: maxHeight,
      duration: animationDuration,
      useNativeDriver: false,
    }),
    WidthAnimation: Animated.timing(rippleAnimation.circleOne.width, {
      toValue: maxWidth,
      duration: animationDuration,
      useNativeDriver: false,
    }),
    opacityAnimation: Animated.timing(rippleAnimation.circleOne.opacity, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
    }),
  };
  const circleTwo = {
    heightAnimation: Animated.timing(rippleAnimation.circleTwo.height, {
      toValue: maxHeight,
      duration: animationDuration,
      useNativeDriver: false,
    }),
    WidthAnimation: Animated.timing(rippleAnimation.circleTwo.width, {
      toValue: maxWidth,
      duration: animationDuration,
      useNativeDriver: false,
    }),
    opacityAnimation: Animated.timing(rippleAnimation.circleTwo.opacity, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: false,
      delay: delay,
    }),
  };

  Animated.loop(
    Animated.parallel([
      CircleOne.WidthAnimation,
      CircleOne.heightAnimation,
      CircleOne.opacityAnimation,
      circleTwo.WidthAnimation,
      circleTwo.heightAnimation,
      circleTwo.opacityAnimation,
    ])
  ).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rippleCircle,
          {
            height: rippleAnimation.circleOne.height,
            width: rippleAnimation.circleOne.width,
            borderRadius: Animated.divide(rippleAnimation.circleOne.height, 2),
            opacity: rippleAnimation.circleOne.opacity,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.rippleCircle,
          {
            height: rippleAnimation.circleTwo.height,
            borderRadius: Animated.divide(rippleAnimation.circleTwo.height, 2),
            width: rippleAnimation.circleTwo.width,
            opacity: rippleAnimation.circleTwo.opacity,
          },
        ]}
      ></Animated.View>
    </View>
  );
};
export default UserRipple;
