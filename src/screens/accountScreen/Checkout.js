import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderWithArrow from '../../components/ArrowHeader'
import { bgColor } from "../../utils/colors/main_color"; // Import your primary color

const Checkout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Checkout"
        onPressArrow={() => navigation.goBack()}
      />
      <View style={styles.imageContainer}>
        <Image 
        resizeMode='contain'
        source={require("../../assets/checkout/checkout-1.png")} style={styles.image} />
        <Image 
                resizeMode='contain'

        source={require("../../assets/checkout/checkout-2.png")} style={styles.image} />
        <Image source={require("../../assets/checkout/checkout-3.png")} style={styles.image} />
        <Image source={require("../../assets/checkout/checkout-4.png")} style={styles.image} />
        <Image source={require("../../assets/checkout/checkout-5.png")} style={styles.image} />
        <Image source={require("../../assets/checkout/checkout-6.png")} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Area"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.phoneContainer}>
          <View style={styles.phoneCodeContainer}>
            <TextInput
              style={styles.phoneCodeInput}
              placeholder="+123"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.phoneNumberContainer}>
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="23456543"
              placeholderTextColor="gray"
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("order_confirm")}
        >
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginVertical: 0,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 14,
    bottom: 0,
    
  },
  input: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  phoneContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  phoneCodeContainer: {
    width: "30%",
  },
  phoneCodeInput: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    textAlign: "center",
  },
  phoneNumberContainer: {
    width: "65%",
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#153518',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: '90%',
    left: 17,
    top: 80,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
