import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ChangedPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/changepassword.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Password Changed Successfully</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("login_email")}
        >
          <Text style={styles.buttonText}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangedPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
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
    top: 90,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
