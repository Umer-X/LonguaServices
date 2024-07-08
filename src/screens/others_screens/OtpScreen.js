import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderWithArrow from '../../components/ArrowHeader';
import { bgColor } from '../../utils/colors/main_color';

const Otp_Screen = ({ navigation }) => {
  const otpRefs = Array.from({ length: 6 }).map(() => useRef(null));
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleOtpChange = (text, index) => {
    if (text && index < otpRefs.length - 1) {
      otpRefs[index + 1].current.focus();
    } else if (!text && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Enter OTP Code"
        onPressArrow={() => navigation.goBack()}
      />
      <Text style={styles.description}>
        We’ve sent you a 6-digit code to your email:{" "}
        <Text style={{ color: bgColor.primary_color }}>@example.com</Text>
      </Text>
      <View style={styles.otpContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            ref={otpRefs[index]}
            style={[
              styles.otpInput,
              index === focusedIndex && { borderColor: bgColor.primary_color }
            ]}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={text => handleOtpChange(text, index)}
            onKeyPress={event => handleBackspace(event, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("password_reset")}
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
    fontSize: 15,
    marginHorizontal: 30,
    marginTop: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  otpInput: {
    width: 43,
    height: 53,
    borderWidth: 1,
    borderColor: '#E3E3CE',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 6,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    top: 410,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Otp_Screen;
