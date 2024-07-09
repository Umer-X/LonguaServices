import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import HeaderWithArrow from '../../components/ArrowHeader';
import Boxes from '../../components/Boxes';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);

  const boxesData = [
    {
      image: require('../../assets/boxes/box1.png'),
      title: 'Legal Translation',
      description: 'Expert translation of legal documents with precision.',
      targetScreen: 'services',
    },
    {
      image: require('../../assets/boxes/box2.png'),
      title: 'Legal Support',
      description: 'Professional legal support services.',
      targetScreen: 'services',
    },
    {
      image: require('../../assets/boxes/box3.png'),
      title: 'Services',
      description: 'The Comprehensive management services.',
      targetScreen: 'services',
    },
    {
      image: require('../../assets/boxes/box4.png'),
      title: 'Legal Support',
      description: 'Professional legal support services.',
      targetScreen: 'services',
    },
    {
      image: require('../../assets/boxes/box5.png'),
      title: 'Legal Tranlation',
      description: 'Expert translation of documents with precision.',
      targetScreen: 'services',
    },
    {
      image: require('../../assets/boxes/box6.png'),
      title: 'Legal Support',
      description: 'Professional legal support services.',
      targetScreen: 'services',
    },
  ];

  const handleSelectService = (index) => {
    if (selectedService === index) {
      setSelectedService(null); 
    } else {
      setSelectedService(index);
    }
  };

  const handleContinue = () => {
    if (selectedService !== null) {
      navigation.navigate('marriage_contracts');
    }
  };

  return (
    <View style={styles.container}>
    <View style={{right:15,}}>
    <HeaderWithArrow 
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Legal Translation"
        onPressArrow={() => navigation.goBack()}
      />
    </View>
      <View style={styles.boxesContainer}>
        {boxesData.map((box, index) => (
          <Boxes
            key={index}
            image={box.image}
            title={box.title}
            description={box.description}
            targetScreen={box.targetScreen}
            isSelected={selectedService === index}
            onPress={() => handleSelectService(index)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, selectedService === null && styles.disabledButton]}
          onPress={handleContinue}
          disabled={selectedService === null}
        >
          <Text style={styles.buttonText}>
            {selectedService === null ? 'Select the Service' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 40,
    top: -30,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#153518',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    top: '80%',
  },
  disabledButton: {
    backgroundColor: '#D3D3D3', // Gray out the button when disabled
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
