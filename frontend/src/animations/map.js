import { Animated } from "react-native";
export const animation = (toMove, animValue, timing) => {
  Animated.timing(animValue, {
    toValue: toMove,
    duration: timing,
    useNativeDriver: false,
  }).start();
};
