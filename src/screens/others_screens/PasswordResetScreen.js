import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Input_Field from "../../components/Input_Filed";
import { bgColor } from "../../utils/colors/main_color";
import HeaderWithArrow from "../../components/ArrowHeader";

const PasswordReset = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Reset Your Password"
        onPressArrow={() => navigation.goBack()}
      />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.leftText}>New Password</Text>
          <Input_Field icon="password" placeholder="New Password" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.leftText}>Confirm New Password</Text>
          <Input_Field icon="password" placeholder="Confirm New Password" />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("changed_password")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
    top: 40,
    alignItems: "center",
    paddingHorizontal: 2,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 0,
    paddingHorizontal: 25,
  },
  leftText: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 0,
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
    top: 330,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PasswordReset;
