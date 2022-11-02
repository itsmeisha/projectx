import { useState } from "react";
import { View, Animated } from "react-native";
// import {  } from "react-native";

// styles
import styles from "../../styles/global/AmbulanceRipple.js";

const AmbulanceRipple = () => {
  const [rippleAnimation] = useState({
    circleOne: {
      size: new Animated.Value(0),
      opacity: new Animated.Value(1),
    },
    circleTwo: {
      size: new Animated.Value(0),
      opacity: new Animated.Value(1),
    },
  });

  const animationDuration = 1500;

  const maxSize = 170;
  const delay = 500;

  const CircleOne = {
    sizeAnimation: Animated.timing(rippleAnimation.circleOne.size, {
      toValue: maxSize,
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
    sizeAnimation: Animated.timing(rippleAnimation.circleTwo.size, {
      toValue: maxSize,
      duration: animationDuration,
      useNativeDriver: false,
      delay: delay,
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
      CircleOne.sizeAnimation,
      CircleOne.opacityAnimation,
      circleTwo.sizeAnimation,
      circleTwo.opacityAnimation,
    ])
  ).start();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.rippleCircle,
          {
            height: rippleAnimation.circleOne.size,
            width: rippleAnimation.circleOne.size,
            borderRadius: Animated.divide(rippleAnimation.circleOne.size, 2),
            opacity: rippleAnimation.circleOne.opacity,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.rippleCircle,
          {
            height: rippleAnimation.circleTwo.size,
            borderRadius: Animated.divide(rippleAnimation.circleTwo.size, 2),
            width: rippleAnimation.circleTwo.size,
            opacity: rippleAnimation.circleTwo.opacity,
          },
        ]}
      ></Animated.View>
    </View>
  );
};
export default AmbulanceRipple;
