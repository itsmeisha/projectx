import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// context
import { contextProvider } from "../../../Context";

// components
import Inputer from "./Inputer";

// styles
import styles from "../../styles/profile/AmbulancePopup.js";
import axios from "axios";

const AmbulancePopup = () => {
  const {
    usr: [user, setUser],
    profile: {
      popup: [ambPopup, setAmbPopup],
      ambul: [ambulData, SetAmbData],
      ambulance: [myAmbulance, setMyAmbulnace],
    },
    map: {
      userLoc: [currentLocation],
    },
    config: { api },
  } = useContext(contextProvider);

  // for the save btn
  const [canSave, setCanSave] = useState(false);

  const saveAmbulance = () => {
    if (!canSave) return;
    // updating the profile
    // setUser(() => {
    //   return {
    //     ...user,
    //     ambulance: {
    //       ...user?.ambulance,
    //       ...ambulData,
    //       trackable: true,
    //     },
    //   };
    // });

    const updatedAmbulance = {
      ...myAmbulance,
      ...ambulData,
      location: { ...currentLocation },
      status: true,
      selected: false,
      owner: user?.name,
    };

    if (myAmbulance && myAmbulance.userId) {
      // sending a request to update the ambulance to the api
      axios
        .patch(`${api}/api/v1/ambulance/`, {
          id: user?.id,
          data: updatedAmbulance,
        })
        .then((res) => {
          const responseAmbulance = res.data?.ambulance;
          setMyAmbulnace({ ...responseAmbulance });
          console.log({
            response: res.data,
          });
        })
        .catch((e) => {
          console.log({
            response: e.response.data,
          });
          if (e.response?.status === 404) {
            console.log(e.response?.message);
          }
        });
    } else {
      // creating the ambulance

      axios
        .post(`${api}/api/v1/ambulance/create`, {
          id: user?.id,
          data: updatedAmbulance,
        })
        .then((res) => {
          const responseAmbulance = res.data?.ambulance;
          console.log({
            response: res.data,
          });
          setMyAmbulnace({ ...responseAmbulance });
        })
        .catch((e) => {
          if (e.response?.status === 403) {
            setMyAmbulnace(e.response?.data?.ambulance);
          }
        });
    }

    // closing the popup
    setAmbPopup(false);

    // resetting the data
    SetAmbData({});
  };
  const cancelAmbulance = () => {
    // closing popup
    setAmbPopup(false);

    // reseting the data
    SetAmbData({});
  };

  useEffect(() => {
    setCanSave(() => {
      if (ambPopup === "edit") {
        return ambulData && Object.values(ambulData).length > 0
          ? !Object.values(ambulData).includes("")
          : false;
      }

      return ambulData && Object.values(ambulData).length === 4
        ? !Object.values(ambulData).includes("")
        : false;
    });
  }, [ambulData]);

  return (
    <>
      {ambPopup ? (
        <>
          {/* this is the balck background behind the box that will close the window */}
          <Pressable
            onPress={() => {
              setAmbPopup(false);
              // resetting the data
              SetAmbData({});
            }}
            style={styles.closer}
          ></Pressable>
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={styles.contents}>
                <Inputer
                  title={"Vehicle Number"}
                  placeholder={"L141 /A1341"}
                  name={"vNumber"}
                />
                <Inputer
                  title={"Name"}
                  placeholder={"Lumbini Ambulance"}
                  name={"name"}
                />
                <Inputer
                  title={"Drivers Name"}
                  placeholder={user?.name}
                  name={"dName"}
                />
                <Inputer
                  title={"Contact Number"}
                  placeholder={"9867******"}
                  name={"pNumber"}
                />

                {/* action buttons               */}

                <View style={styles.btns}>
                  <Pressable onPress={saveAmbulance}>
                    <Text
                      style={[
                        styles.save,
                        styles.btn,
                        !canSave
                          ? {
                              opacity: 0.7,
                            }
                          : {
                              opacity: 1,
                            },
                      ]}
                    >
                      {ambPopup === "edit" ? "Save" : "Add"}
                    </Text>
                  </Pressable>

                  <Pressable onPress={cancelAmbulance}>
                    <Text style={[styles.cancel, styles.btn]}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </>
      ) : null}
    </>
  );
};

export default AmbulancePopup;
