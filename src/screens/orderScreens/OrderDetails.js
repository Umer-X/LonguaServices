import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import HeaderWithArrow from "../../components/ArrowHeader";
import { bgColor } from "../../utils/colors/main_color";

const OrderDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { index, title, fileLanguage, translateTo, liveDate, status } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Order (${index}) ${status === 'Under Review' ? 'Translating' : 'Completed'}`,
    });
  }, [navigation, index, status]);

  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent={`Order (${index}) ${status === 'Under Review' ? 'Translating' : 'Completed'}`}
        onPressArrow={() => navigation.goBack()}
      />
      <View style={styles.orderContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/order-image.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>
            File Language: <Text style={styles.highlightedText}>{fileLanguage}</Text>
          </Text>  
          <Text style={styles.text}>
            Translate to: <Text style={styles.highlightedText}>{translateTo}</Text>
          </Text>
          <Text style={styles.text}>
            Live Date: <Text style={styles.highlightedText}>{liveDate}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.orderDescription}>
        <View style={styles.descriptionItem}>
          <Image
            source={require("../../assets/tick.png")}
            style={styles.tickIcon}
          />
          <Text style={{color:'black',}}>Attached the Approved legal Stamp</Text>
        </View>
        <View style={styles.descriptionItem}>
          <Image
            source={require("../../assets/tick.png")}
            style={styles.tickIcon}
          />
          <Text style={{color:'black',}}>
            Shipping to:{" "}
            <Text style={styles.highlightedText}>
              16 Yaho Street 4538808 Jerusalem
            </Text>
          </Text>
        </View>
      </View>


      <View style={styles.orderFooter}>
        <View style={styles.textContainer}>
          <Text style={styles.bottomtext}>Download your Documents</Text>
        </View>
        <View style={styles.downloadContainer}>
        <TouchableOpacity style={styles.downloadbutton}>
        <Text style={styles.downloadText}>Downoad PDF</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.downloadContainer}>
        <TouchableOpacity style={styles.reviewbutton}>
        <Text style={styles.reviewText}>Review PDF</Text>
      </TouchableOpacity>
        </View>
      </View>
     <View style={styles.buttonContainer}>
     <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("services")}
            >
              <Text style={styles.buttonText}>Translate more files</Text>
            </TouchableOpacity>
     </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  orderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#FAFAFA",
    marginTop: 30,
  },
  text: {
    color: "#777777",
    fontSize: 13,
    fontWeight: "400",
  },
  textContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: "#FAFAFA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomtext: {
    fontSize: 20,
    fontWeight: "700",
    color:'black',
  },
  orderFooter: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    
  },
  downloadContainer: {
    marginBottom: -10,
    padding: 10,
    width: '100%',
    
    justifyContent: "center",
    alignItems: "center",
  },
  downloadbutton: {
    backgroundColor: bgColor.primary_color,
    padding: 10,
    width: '70%',
    height: 50,
    borderRadius: 35,
    fontSize: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reviewbutton: {
    backgroundColor: "#fff",
    padding: 10,
    borderWidth: 1,
    width: '70%',
    height: 50,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  downloadText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    
  },
  reviewText: {
    color: bgColor.primary_color,
    fontSize: 15,
    fontWeight: "700",
  },

  imageContainer: {
    marginRight: 30,
    left: 30,
  },
  image: {
    width: 89,
    height: 93.67,
    marginBottom: 5,
  },
  infoContainer: {
    flex: 1,
    
  },
  highlightedText: {
    color: bgColor.primary_color,
    fontWeight: "700",
  },
  orderDescription: {
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: -15,
    fontSize: 14,
  },
  descriptionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
   
    
  },
  tickIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color:'black',
    marginBottom: 8,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 130,
  },
  button: {
    width: "75%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
    bottom: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
