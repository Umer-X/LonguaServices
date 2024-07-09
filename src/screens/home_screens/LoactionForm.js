import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import HeaderWithArrow from '../../components/ArrowHeader';
import { useNavigation } from '@react-navigation/native';

const LocationForm = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <View style={{right:25,}}>
      <HeaderWithArrow
        arrowIcon={require('../../assets/backArrow.png')}
        headerContent="Location Form"
        onPressArrow={() => navigation.goBack()}
      />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Address/Street"
            placeholderTextColor="gray"
          />
        </View>
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
        <TouchableOpacity
         onPress={() => navigation.navigate("order_recieved")}
        style={styles.button}>
          <Text style={styles.buttonText}>Add Your Location</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LocationForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 0,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E3E3CE',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    height: '90%',
    fontSize: 16,
    color: '#000',
    opacity: 0.8,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  phoneCodeContainer: {
    flex: 1,
    marginRight: 10,
  },
  phoneNumberContainer: {
    flex: 2,
  },
  phoneCodeInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E3E3CE',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    opacity: 0.8,
  },
  phoneNumberInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E3E3CE',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    opacity: 0.8,
  },
  button: {
    backgroundColor: '#153518',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: '80%',
    marginBottom: 30,
    marginLeft: '10%',
    marginTop: 20,
    top: 70,
    elevation: 5,
  },
  arrowIcon: {
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
