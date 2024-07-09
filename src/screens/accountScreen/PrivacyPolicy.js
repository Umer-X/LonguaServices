import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import HeaderWithArrow from "../../components/ArrowHeader";

const AboutLonguaServices = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Privacy Policy"
        onPressArrow={() => navigation.goBack()}
      />
      <ScrollView style={{top:0,}} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.point}>
          At LinguaService, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard the information you
          provide to us through our app.
        </Text>
        <Text style={styles.subPoint}>1. Information We Collect:</Text>
        <Text style={styles.subPointDetail}>
        • Personal Information: When you create an account or place an order,
          we may collect personal information such as your name, email address,
          phone number, and billing information.
        </Text>
        <Text style={styles.subPointDetail}>
        • Usage Information: We may collect information about how you interact
          with our app, including your browsing activity, preferences, and
          device information.
        </Text>
        <Text style={styles.subPoint}>2. How We Use Your Information:</Text>
        <Text style={styles.subPointDetail}>
          • To Process Orders: We use the information you provide to process
          your orders, deliver services, and communicate with you about your
          transactions.
        </Text>
        <Text style={styles.subPointDetail}>
          • Personalization: We may use your information to personalize your
          experience, provide tailored recommendations, and improve our
          services.
        </Text>
        <Text style={styles.subPointDetail}>
          • Communication: We may send you notifications, updates, and
          promotional offers based on your preferences.
        </Text>
        <Text style={styles.subPoint}>3. Data Security:</Text>
        <Text style={styles.subPointDetail}>
        • We implement industry-standard security measures to protect your
          personal information from unauthorized access, disclosure, alteration,
          or destruction.
        </Text>
        <Text style={styles.subPointDetail}>
        • However, no method of transmission over the internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </Text>
        <Text style={styles.subPoint}>4. Data Sharing:</Text>
        <Text style={styles.subPointDetail}>
        • We may share your personal information with trusted third-party
          service providers who assist us in delivering our services, processing
          payments, or analyzing app usage.
        </Text>
        <Text style={styles.subPointDetail}>
        • We do not sell, trade, or rent your personal information to third
          parties for their marketing purposes.
        </Text>
        <Text style={styles.subPoint}>5. Your Choices:</Text>
        <Text style={styles.subPointDetail}>
        • You can update your account information, preferences, and
          communication settings at any time.
        </Text>
        <Text style={styles.subPointDetail}>
        • You may opt-out of receiving promotional emails or notifications
          from us.
        </Text>
        <Text style={styles.subPoint}>6. Children's Privacy:</Text>
        <Text style={styles.subPointDetail}>
        • Our services are not directed to individuals under the age of 13,
          and we do not knowingly collect personal information from children.
        </Text>
        <Text style={styles.subPoint}>7. Changes to This Privacy Policy:</Text>
        <Text style={styles.subPointDetail}>
        • We reserve the right to update or modify this Privacy Policy at any
          time. We will notify you of any changes by posting the updated policy
          on our app.
        </Text>
        <Text style={styles.point}>
          By using our app, you consent to the terms of this Privacy Policy. If
          you have any questions or concerns about our privacy practices, please
          contact us at [insert contact information].
        </Text>
        <Text style={styles.lastUpdated}>Last Updated: 14 March 2024</Text>
      </ScrollView>
    </View>
  );
};

export default AboutLonguaServices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 10,
  },
  point: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
    lineHeight: 24,
    fontWeight: "500",
  },
  subPoint: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  subPointDetail: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
    marginLeft: 20,
    lineHeight: 24,
  },
  lastUpdated: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    lineHeight: 24,
  },
});
