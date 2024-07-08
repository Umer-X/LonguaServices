import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const OrderConfirm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/order-confirm.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Thank you for your order!</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
        Rest assured, our team of professional professors will work diligently on your order. 
        We'll send you a notification once it's completed and another when it's shipped.
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

export default OrderConfirm;

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
    paddingHorizontal: 10,
    bottom: 20,
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
    top: 70,
  
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
