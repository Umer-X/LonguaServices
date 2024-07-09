import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import OrderBox from '../../components/OrderBox';

const OrderScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: 'Marriage Contracts',
      fileLanguage: 'English',
      translateTo: 'Arabic',
      liveDate: '2024-06-28',
      status: 'Under Review',
    },
    {
      id: 2,
      title: 'Legal Documents',
      fileLanguage: 'Arabic',
      translateTo: 'English',
      liveDate: '2024-06-25',
      status: 'Completed',
    },
  ]);

  const [activeSection, setActiveSection] = useState('Translating');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const translatingCount = orders.filter(order => order.status === 'Under Review').length;
  const completedCount = orders.filter(order => order.status === 'Completed').length;

  const filteredOrders = orders.filter(order => {
    if (activeSection === 'Translating') {
      return order.status === 'Under Review';
    } else if (activeSection === 'Completed') {
      return order.status === 'Completed';
    }
    return true;
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}>
          Orders
        </Text>
      </View>

      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.headerSection, activeSection === 'Translating' && styles.activeSection]}
          onPress={() => handleSectionClick('Translating')}
        >
          <Text style={styles.sectionText}>Translating ({translatingCount})</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerSection, activeSection === 'Completed' && styles.activeSection]}
          onPress={() => handleSectionClick('Completed')}
        >
          <Text style={styles.sectionText}>Completed ({completedCount})</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredOrders}
       keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <OrderBox
          index={index + 1}
          id={item.id}
            title={item.title}
            fileLanguage={item.fileLanguage}
            translateTo={item.translateTo}
            liveDate={item.liveDate}
            status={item.status}
            navigation={navigation}
          />
        )}
        contentContainerStyle={styles.orderContainer}
      />
      <View style={styles.translateMoreButtonContainer}>
      
      </View>
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
  titleHeader: {
    marginTop: 40,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerSection: {
    paddingVertical: 7,
    paddingHorizontal: 20,
  },
  activeSection: {
    borderBottomWidth: 2,
    borderRadius: 100,
    borderBottomColor: '#153518',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderContainer: {
    marginTop: 20,
  },

});

export default OrderScreen;
