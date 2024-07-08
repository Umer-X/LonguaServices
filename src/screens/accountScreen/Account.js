import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const Account = ({ navigation }) => {
  const handleNavigateToLanguages = () => {
    navigation.navigate("languague");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ahmed Baqir</Text>
          <Text style={styles.editAccount}>Edit Account</Text>
        </View>
      </View>
      <View style={styles.checkMainContainer}>
        <View style={styles.checkContainer}>
          <View style={styles.iconTextContainer}>
            <Icon name="settings-outline" size={24} color="gray" />
            <Text style={styles.checkText}>Settings</Text>
          </View>
          <TouchableOpacity onPress={handleNavigateToLanguages}>
            <Image
              source={require("../../assets/arrowRight.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkContainer}>
          <View style={styles.iconTextContainer}>
            <Icon name="cart-outline" size={24} color="gray" />
            <Text style={styles.checkText}>My Orders</Text>
          </View>
          <TouchableOpacity    onPress={() => navigation.navigate('accepted_orders')} >
            <Image
              source={require("../../assets/arrowRight.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkContainer}>
          <View style={styles.iconTextContainer}>
            <Icon name="lock-closed-outline" size={24} color="gray" />
            <Text style={styles.checkText}>Privacy Policy</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('privacy_policy')}
          >
            <Image
              source={require("../../assets/arrowRight.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkContainer}>
          <View style={styles.iconTextContainer}>
            <Icon name="information-circle-outline" size={24} color="gray" />
            <Text style={styles.checkText}>About Lingua Services</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('about_longua_services')}>
            <Image
              source={require("../../assets/arrowRight.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity> 
        </View>
      </View>
      <TouchableOpacity style={styles.logoutContainer}
      onPress={() => navigation.navigate('login_email')}
      >
        <Icon name="log-out-outline" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  titleContainer: {
    marginBottom: 20,
    top: 70,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    top: 70,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  profileTextContainer: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
  },
  editAccount: {
    fontSize: 16,
    color: 'gray',
  },
  checkMainContainer: {
    marginTop: 60,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomColor: "#e8e9ed",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: '22%',
    padding: 15,
  },
  logoutText: {
    fontSize: 18,
    color: "red",
    fontWeight: "500",
    marginLeft: 10,
  },
});

export default Account;
