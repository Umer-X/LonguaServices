import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import HeaderWithArrow from "../../components/ArrowHeader";
import * as DocumentPicker from 'react-native-document-picker'
import { useNavigation } from "@react-navigation/native";
import CheckBox from "@react-native-community/checkbox";

const MarriageContracts = () => {
  const navigation = useNavigation();
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        multiple: false,
      });

      if (result.type === "success") {
        console.log("Selected file: ", result);
        // Handle the selected file (result)
      } else {
        console.log("User cancelled the file picker");
      }
    } catch (err) {
      console.error("Unknown error: ", err);
      throw err;
    }
  };

  const handleNavigateToLanguages = () => {
    navigation.navigate("languague");
  };

  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Marriage Contracts"
        onPressArrow={() => navigation.goBack()}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
        <Text style={styles.uploadButtonText}>Upload Your File</Text>
      </TouchableOpacity>

      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>Select your file language</Text>
        <TouchableOpacity onPress={handleNavigateToLanguages}>
          <Image
            source={require("../../assets/arrowRight.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>Select your desired language</Text>
        <TouchableOpacity onPress={handleNavigateToLanguages}>
          <Image
            source={require("../../assets/arrowRight.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.optionItem}>
          <CheckBox
            value={isChecked1}
            onValueChange={setChecked1}
            tintColors={{ true: "#4630EB", false: "gray" }}
          />
          <Text style={styles.optionText}>Attach the approved Legal Stamp</Text>
        </View>
        <View style={styles.optionItem}>
          <CheckBox
            value={isChecked2}
            onValueChange={setChecked2}
            tintColors={{ true: "#4630EB", false: "gray" }}
          />
          <Text style={styles.optionText}>Ship my Documents</Text>
        </View>
        <View style={styles.optionItem}>
          <CheckBox
            value={isChecked3}
            onValueChange={setChecked3}
            tintColors={{ true: "#4630EB", false: "gray" }}
          />
          <Text style={styles.optionText}>Add Note (optional)</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("loaction_form")}
      >
        <Text style={styles.buttonText}>Send your Offer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MarriageContracts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  uploadButton: {
    width: "95%",
    height: 131,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 40,
    alignSelf: "center",
  },
  uploadButtonText: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
  },
  checkText: {
    fontSize: 16,
    color: "gray",
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  optionsContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  optionText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 10,
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
