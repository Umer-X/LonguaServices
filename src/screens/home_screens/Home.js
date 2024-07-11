import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {bgColor} from '../../utils/colors/main_color';
import Input_Field from '../../components/Input_Filed';
import Boxes from '../../components/Boxes';
import {LinearGradient} from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = [
    'All',
    'Legal Translation',
    'Legal Support',
    'Document Services',
  ];

  const renderCategory = ({item}) => (
    <TouchableOpacity
      onPress={() => setActiveCategory(item)}
      style={[
        styles.categoryBox,
        {
          backgroundColor:
            item === activeCategory ? bgColor.primary_color : '#FFF',
          padding: item === activeCategory ? 12 : 10,
        },
      ]}>
      <Text
        style={[
          styles.categoryText,
          {
            color: item === activeCategory ? '#FFF' : bgColor.primary_color,
          },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.bellIcon}>
          <Image
            source={require('../../assets/bell.png')}
            style={styles.bellImage}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Input_Field
          icon="searchIcon"
          placeholder="What are you Looking for ?"
        />
      </View>

      <LinearGradient
        colors={['#153518', '#4C6B4E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.greenBox}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>LinguaService: Bridging Worlds</Text>
          <Text style={styles.description}>
            Connect seamlessly across languages with expert translation,
            document assistance, and more!
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/rectangle.png')}
            style={styles.image}
          />
        </View>
      </LinearGradient>

      <Image
        source={require('../../assets/default.png')}
        style={styles.defaultImage}
      />
      <Text style={styles.sectionTitle}>Explore our Services:</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      />
      <View style={styles.boxesRow}>
        <Boxes
          image={require('../../assets/boxes/box1.png')}
          title="Legal Translation"
          onPress={() => navigation.navigate('services')}
          description="Expert translation of legal documents with precision."
        />
        <Boxes
          image={require('../../assets/boxes/box2.png')}
          title="Legal Support"
          description="Professional legal support services."
          targetScreen={'services'}
        />
      </View>
      <View style={styles.boxesRow}>
        <Boxes
          image={require('../../assets/boxes/box5.png')}
          title="Document Servies"
          description=" Document  management services."
          targetScreen={'services'}
        />
        <Boxes
          image={require('../../assets/boxes/box6.png')}
          title="Legal Support"
          description="Professional legal support services."
          targetScreen={'services'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  greenBox: {
    backgroundColor: '#183813',
    flexDirection: 'row',
    padding: 20,
    width: 348,
    height: 150,
    borderRadius: 20,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  description: {
    fontSize: 12,
    color: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 111.3,
    height: 190,
    resizeMode: 'contain',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 0,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  bellIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bellImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  defaultImage: {
    width: 300,
    height: 100,
    bottom: 25,
    resizeMode: 'contain',
    marginBottom: -10,
  },
  sectionTitle: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    right: 50,
    marginBottom: -20,
    bottom: 30,
  },
  categoryContainer: {
    paddingHorizontal: 0,
    marginBottom: 10, // Adjusted margin to reduce space
  },
  categoryBox: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  boxesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    gap: 15,
  },
});

export default Home;
