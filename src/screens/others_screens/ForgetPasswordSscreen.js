import React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import Input_Field from "../../components/Input_Filed";
import { bgColor } from "../../utils/colors/main_color";
import HeaderWithArrow from "../../components/ArrowHeader";

const Forgetpassword_Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Forget Password"
        onPressArrow={() => navigation.goBack()}
      />
      <Text style={styles.description}>
        Please enter the email associated with your{" "}
        <Text style={{ color: bgColor.primary_color }}>LinguaServices</Text>{" "}
        account.
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.leftText}>Email Address</Text>
        <Input_Field icon="email" placeholder="Email" />
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:450}}>
      <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("otp_screen")}
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
  description: {
    fontWeight: "500",
     top: -20,
     color:'black',
    fontSize: 15,
    left: 30,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    top: -10,
    height: 80,
    
   
  },
  leftText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
    color:'black',
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
    bottom: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Forgetpassword_Screen;
