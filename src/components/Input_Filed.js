import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { bgColor } from "../utils/colors/main_color";

const iconPaths = {
  user: require("../assets/icon-user.png"),
  password: require("../assets/icon_password.png"),
  email: require("../assets/icon_email.png"),
  phone: require("../assets/icon_phone.png"),
  searchIcon: require("../assets/search-icon.png"), // Corrected typo in the icon path
};

const Input_Field = ({ icon, value, onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <Image
        source={iconPaths[icon]}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={bgColor.secondary_color}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E3E3CE",
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 0,
    marginBottom: 16,
    paddingVertical: 0,
    paddingHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  icon: {
    width: 22,
    height: 22, 
    marginLeft: 12, 

    marginRight: 10, 

  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 0,
    fontSize: 16,
    color: "#000",
    opacity: 0.8, 
  },
});

export default Input_Field;
