import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import SplashScreens from "../screens/splash_screens/splashscreens";
import LoginScreens from "../screens/login_screens/login_screens";
import SignUp from "../screens/signup_screens/sign_up";
import ForgetPasswordScreen from '../screens/others_screens/ForgetPasswordSscreen';
import OtpScreen from "../screens/others_screens/OtpScreen";
import PasswordResetScreen from "../screens/others_screens/PasswordResetScreen";
import ChangedPasswordScreen from "../screens/others_screens/ChangedPasswordScreen";
import MainTabs from "./MainTabs";
import Services from "../screens/home_screens/Services";
import MarriageContracts from "../screens/home_screens/MarriageContracts";
import Languague from "../screens/home_screens/Languague";
import LoactionForm from "../screens/home_screens/LoactionForm";
import OrderRecieved from '../screens/home_screens/OrderRecieved';
import SupportChat from '../screens/supportScreen/SupportChat';
import AboutLonguaServices from "../screens/accountScreen/AboutLonguaServices";
import PrivacyPolicy from "../screens/accountScreen/PrivacyPolicy";
import AcceptedOrders from "../screens/accountScreen/AcceptedOrders";
import Checkout from "../screens/accountScreen/Checkout";
import OrderConfirm from '../screens/accountScreen/OrderConfirm';
import OrderDetails from "../screens/orderScreens/OrderDetails";

const Stack = createNativeStackNavigator();
  

function StackNavigator() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF"  />
      <Stack.Navigator initialRouteName= "SplashScreens" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SplashScreens" component={SplashScreens} />
        <Stack.Screen name="login_email" component={LoginScreens} />
        <Stack.Screen name="sign_up" component={SignUp} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="forget_password" component={ForgetPasswordScreen} />
        <Stack.Screen name="otp_screen" component={OtpScreen} />
        <Stack.Screen name="password_reset" component={PasswordResetScreen} />
        <Stack.Screen name="changed_password" component={ChangedPasswordScreen} />
        <Stack.Screen name="services" component={Services} />
        <Stack.Screen name="marriage_contracts" component={MarriageContracts} />
        <Stack.Screen name="languague" component={Languague} />
        <Stack.Screen name="loaction_form" component={LoactionForm} />
        <Stack.Screen name="order_recieved" component={OrderRecieved} />
        <Stack.Screen name="support_chat" component={SupportChat} />
        <Stack.Screen name="about_longua_services" component={AboutLonguaServices} />
        <Stack.Screen name="privacy_policy" component={PrivacyPolicy} />
        <Stack.Screen name="accepted_orders" component={AcceptedOrders} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="order_confirm" component={OrderConfirm} />
        <Stack.Screen name="order_details" component={OrderDetails} />
      </Stack.Navigator>
    </>
  );
}

export default StackNavigator;
