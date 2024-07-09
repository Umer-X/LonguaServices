import React from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderWithArrow = ({ arrowIcon, headerContent }) => {
  const navigation = useNavigation();

  const handleArrowPress = () => {
    navigation.goBack(); // Example: Navigate back
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleArrowPress}>
        <Image source={arrowIcon} style={styles.arrowIcon} />
      </Pressable>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>{headerContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 30,
    width:'100%',
   
    top:20,
   
    height: 60,
    marginBottom: 40,
  },
  arrowIcon: {
    width: 24, // Set the same size as the arrow icon
    height: 24, // Set the same size as the arrow icon
  },
  headerContent: {
    flex: 1,
 
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black', // Change the color as needed
  },
});

export default HeaderWithArrow;
