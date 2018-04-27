import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#8cc6ff", "#0080ff"],
    title: "Main Title Rain",
    subTitle: "SubTile Rain",
    icon: "ios-sunny"
  },

  Clear: {
    colors: ["#8cc6ff", "#fb46ae"],
    title: "Main Title Clear",
    subTitle: "SubTile Clear",
    icon: "ios-sunny"
  },

  Thunderstom: {
    colors: ["#8cc6ff", "#64d850"],
    title: "Main Title Thunderstom",
    subTitle: "SubTile Thunderstom",
    icon: "ios-thunderstom"
  },

  Clouds: {
    colors: ["#8cc6ff", "#d9a211"],
    title: "Main Title Clouds",
    subTitle: "SubTile Clouds",
    icon: "ios-cloudy"
  },

  Snow: {
    colors: ["#f6f6f6", "#bfbfbf"],
    title: "Main Title Snow",
    subTitle: "SubTile Snow",
    icon: "ios-snow"
  }
};

function Weather2({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.top}>
        <Ionicons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.TempText}> {temp}℃ </Text>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText1}>
          {" "}
          {weatherCases[weatherName].title}{" "}
        </Text>
        <Text style={styles.bottomText2}>
          {" "}
          {weatherCases[weatherName].subTitle}{" "}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather2.PropTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather2;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 3,
    //backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  TempText: {
    fontSize: 40,
    //fontWeight : 'bold',
    color: "white",
    textAlign: "center",
    marginTop: 10
  },
  bottom: {
    flex: 1,
    //backgroundColor: 'blue',
    justifyContent: "center",
    flexDirection: "column"
  },
  bottomText1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  bottomText2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  }
});
