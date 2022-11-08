import { View, SafeAreaView, Platform, ScrollView } from "react-native";
import React, { useContext } from "react";

// components
import Nav from "../components/global/Nav";
import Header from "../components/global/Header";
import IndivLog from "../components/log/IndivLog";
import NoData from "../components/global/NoData";

// styles
import styles from "../styles/Log/LogScreen.js";

//context
import { contextProvider } from "../../Context";

const LogScreen = ({ navigation }) => {
  const {
    history: [logs],
  } = useContext(contextProvider);
  return (
    <SafeAreaView
      style={{ paddingTop: Platform.OS === "android" ? 30 : 0, height: "100%" }}
    >
      <Header navigator={navigation} heading={"Tracking logs"} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {logs.length > 1 && logs ? (
          logs.map((data, index) => {
            return <IndivLog data={data} key={index} />;
          })
        ) : (
          <NoData type={"log"} navigator={navigation} />
        )}
        <View
          style={{
            height: 110,
            width: "100%",
          }}
        ></View>
      </ScrollView>

      <Nav active={"LogScreen"} navigator={navigation} />
    </SafeAreaView>
  );
};

export default LogScreen;
