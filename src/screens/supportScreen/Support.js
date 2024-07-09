import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { bgColor } from '../../utils/colors/main_color';

const Support = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>Support</Text>
      </View>
      <TouchableOpacity 
        onPress=  {()=>navigation.navigate("support_chat")}
      style={styles.chatContent}>
      <View style={styles.imageContainer}>
      <Image source={require('../../assets/support.png')} style={styles.image} />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>New Chat!</Text>
          <Text style={styles.description}>Start a new chat with our Support!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 0,
    
  },
  titleText: {
    fontSize: 26,
    fontWeight: '700',
    top: 24,
    left:5,
  },
  chatContent: {
  
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#f2eeed',
    alignItems: 'center',
    top: 50,
  },
  imageContainer: {
    width: 70,
    height: 70,
    padding: 0,
    backgroundColor: '#4C6B4E',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,

  },
  image: {
    width: 30,
    height: 30,
    marginRight: 0,
  
  
  },
  content: {
    flex: 1,
   
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 0,
  },
  description: {
    fontSize: 11,
    color: 'black',
  },
});

export default Support;
