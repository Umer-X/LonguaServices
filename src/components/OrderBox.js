import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { bgColor } from '../utils/colors/main_color';

const OrderBox = ({ index, title, fileLanguage, translateTo, liveDate, status, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.container, status === 'Completed' && styles.completedContainer]}
      onPress={() => navigation.navigate('order_details', { index, title, fileLanguage, translateTo, liveDate, status })}
    >
      <View style={styles.imageContainer}>
        <Image source={require('../assets/order-image.png')} style={styles.image} />
        <Text style={styles.dateValue}>{liveDate}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.detail}>File Language: <Text style={{ fontWeight: '700', color: bgColor.primary_color }}>{fileLanguage}</Text></Text>
        <Text style={styles.detail}>Translate to: <Text style={{ fontWeight: '700', color: bgColor.primary_color }}>{translateTo}</Text></Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusValue}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  completedContainer: {
    backgroundColor: '#',
  },
  imageContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 73,
    height: 71,
    marginBottom: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555555',
  },
  statusContainer: {
    marginTop: 10,
  },
  statusValue: {
    fontWeight: 'bold',
    color: bgColor.primary_color,
    alignSelf: 'flex-end',
    backgroundColor: '#5555',
    padding: 5,
    borderRadius: 30,
  },
  dateValue: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    left: 10,
  },
});

export default OrderBox;
