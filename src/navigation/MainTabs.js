// src/navigation/MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/home_screens/Home";
import Order from "../screens/orderScreens/Order";
import Support from "../screens/supportScreen/Support";
import Account from "../screens/accountScreen/Account";
import { bgColor } from "../utils/colors/main_color";

const Tab = createBottomTabNavigator();

export const mainTabsIcons = [
  {
    image: require('../assets/main-tabs/home-tab.png'),
  },
  {
    image: require('../assets/main-tabs/order-tab.png'),
  },
  {
    image: require('../assets/main-tabs/support-tab.png'),
  },
  {
    image: require('../assets/main-tabs/account-tab.png'),
  }
];

function MainTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = mainTabsIcons[0].image;
              break;
            case 'Order':
              iconSource = mainTabsIcons[1].image;
              break;
            case 'Support':
              iconSource = mainTabsIcons[2].image;
              break;
            case 'Account':
              iconSource = mainTabsIcons[3].image;
              break;
          }

          return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
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
