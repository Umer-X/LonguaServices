// src/navigation/MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../screens/home_screens/Home";
import Order from "../screens/orderScreens/Order";
import Support from "../screens/supportScreen/Support";
import Account from "../screens/accountScreen/Account";
import { bgColor } from "../utils/colors/main_color";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Order':
              iconName = 'cart-outline';
              break;
            case 'Support':
              iconName = 'help-circle-outline';
              break;
            case 'Account':
              iconName = 'person-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: bgColor.primary_color,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
          paddingTop: 8,
          paddingHorizontal: 10,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 20,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Support" component={Support} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default MainTabs;
