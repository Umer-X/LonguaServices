import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const OrderReceivedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Order-Recieved.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Order Received: Expert Review Underway</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Thank you for your order! Our team of professional professors is now reviewing it. 
          You'll receive a notification shortly with the pricing details and estimated completion time. 
          Stay tuned!
        </Text>
      </View>
    
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MainTabs")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
    
    </View>
  );
};

export default OrderReceivedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    bottom: 30,
  },
  image: {
    width: 288,
    height: 268,
  },
  text: {
    color: "#153518",
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  descriptionContainer: {
    paddingHorizontal: 0,
    bottom: 50,
    opacity:0.5,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    top: 60,
  
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
