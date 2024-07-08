import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Boxes = ({ image, title, description, isSelected, onPress }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(targetScreen);
  };

  return (
    <TouchableOpacity 
      style={[styles.boxContainer, isSelected && styles.selectedBox]} 
      onPress={onPress}
     
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default Boxes;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#F5F5F5', 
    width: 157,
    height: 157,
    overflow: 'hidden',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    borderWidth: 1, // Add border width
    borderColor: 'transparent', // Initial transparent border color
  },
  selectedBox: {
    borderColor: '#153518', // Border color when selected
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    textAlign: 'flex-start',
  },
});
