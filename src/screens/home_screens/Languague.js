import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import HeaderWithArrow from '../../components/ArrowHeader';
import { useNavigation } from '@react-navigation/native';

const Languague = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require('../../assets/backArrow.png')}
        headerContent="File Language"
        onPressArrow={() => navigation.goBack()}
      />
      <View style={styles.languageImages}>
        <View style={styles.languageItem}>
          <Image style={styles.languageImage} source={require('../../assets/usa.png')} />
          <Text style={styles.languageText}>English</Text>
        </View>
        <View style={styles.languageItem}>
          <Image style={styles.languageImage} source={require('../../assets/arabia.png')} />
          <Text style={styles.languageText}>Arabic</Text>
        </View>
      </View>
    </View>
  );
};

export default Languague;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  languageImages: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    top: 40,
  },
  languageItem: {
    alignItems: 'center',
    marginVertical: 20,
  },
  languageImage: {
    width: 80,
    height: 80,
  },
  languageText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
