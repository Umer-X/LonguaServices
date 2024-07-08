// SplashScreens.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const SplashScreens = ({ navigation }) => {
  const screens = [
    {
      id: '1',
      title: 'Live Translation Collaboration',
      description: 'Collaborate in real-time with professional translators for accurate translations of legal papers, documents, audio, and video files',
      image: require('../../assets/rectangle.png'),
    },
    {
      id: '2',
      title: 'Quality Assurance System',
      description: 'Ensure accuracy and coherence with automated linguistic and grammatical checks by human experts for translations, research reports, CVs, and more in Arabic and English.',
      image: require('../../assets/rectangle.png'),
    },
    {
      id: '3',
      title: 'Handwritten Text Conversion',
      description: 'Convert handwritten papers into editable electronic texts with OCR integration, offering convenient saving options in Word or PDF formats.',
      image: require('../../assets/rectangle-2.png'),
    },
  ];

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const handleContinue = () => {
    if (currentScreenIndex < screens.length - 1) {
      setCurrentScreenIndex(currentScreenIndex + 1);
    } else {
      navigation.navigate('login_email');
    }
  };

  const handleSkip = () => {
    navigation.navigate('login_email');
  };

  const currentScreen = screens[currentScreenIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipContainer} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image source={currentScreen.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{currentScreen.title}</Text>
        <Text style={styles.description}>{currentScreen.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreens;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    width: windowWidth,
  },
  skipContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#6B6B6B',
  },
  imageContainer: {
    height: '30%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginBottom: 100,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    textAlign: 'center',
    color: 'gray',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#153518',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
