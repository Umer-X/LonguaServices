import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import  { bgColor } from '../colors/main_color'

const Button = ({ textColor, btnLabel, press }) => {
  return (
    <TouchableOpacity onPress={press} style={[styles.button, { backgroundColor: bgColor.primary_color, width: 300 }]}>
      <Text style={[styles.text, { color: textColor }]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 10,
    height: 60,
    top: 693,
    left: 47,
    gap: 0,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Button;
