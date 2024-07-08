import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderWithArrow from "../../components/ArrowHeader";

const AboutLonguaServices = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="About Longua Services"
        onPressArrow={() => navigation.goBack()}
      />
      <ScrollView style={{top:30,}} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.paragraph}>
          LinguaService is a leading provider of professional translation and
          document services, dedicated to helping individuals and businesses
          break language barriers and achieve their communication goals. With a
          team of experienced translators, linguists, and language experts, we
          deliver accurate and high-quality translations in multiple languages.
        </Text>
        <Text style={styles.paragraph}>
          Our mission is to provide seamless and reliable language solutions to
          our clients, whether it's translating legal documents, academic
          papers, business reports, or personal correspondence. We understand
          the importance of clear and effective communication, and we strive to
          exceed our clients' expectations with every project.
        </Text>
        <Text style={styles.paragraph}>
          At LinguaService, we are committed to excellence, integrity, and
          customer satisfaction. We combine cutting-edge technology with human
          expertise to ensure precise and culturally appropriate translations.
          Our user-friendly platform makes it easy for clients to submit orders,
          track progress, and receive their translated documents efficiently.
        </Text>
        <Text style={styles.paragraph}>
          Whether you're an individual looking to translate personal documents
          or a business expanding into international markets, LinguaService is
          your trusted partner for all your language needs. Let us help you
          bridge the gap between languages and cultures, so you can communicate
          confidently and effectively with the world.
        </Text>
        <Text style={styles.paragraph}>
          Choose LinguaService for unparalleled accuracy, reliability, and
          professionalism in translation services. Thank you for considering us
          as your language solution provider.
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutLonguaServices;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 20,
    
   
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    lineHeight: 24,
  },
});
