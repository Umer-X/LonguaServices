import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import HeaderWithArrow from "../../components/ArrowHeader";
import { bgColor } from "../../utils/colors/main_color"; 

const AcceptedOrders = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderWithArrow
        arrowIcon={require("../../assets/backArrow.png")}
        headerContent="Order #01"
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
          <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 8 }}>
            Marriage Contracts
          </Text>
          <Text style={styles.text}>
            File Language: <Text style={styles.highlightedText}>English</Text>
          </Text>  
          <Text style={styles.text}>
            Translate to: <Text style={styles.highlightedText}>Arabic</Text>
          </Text>
        </View>
      </View>
      <View style={styles.orderDescription}>
        <View style={styles.descriptionItem}>
          <Image
            source={require("../../assets/tick.png")}
            style={styles.tickIcon}
          />
          <Text>Attached the Approved legal Stamp</Text>
        </View>
        <View style={styles.descriptionItem}>
          <Image
            source={require("../../assets/tick.png")}
            style={styles.tickIcon}
          />
          <Text>
            Shipping to:{" "}
            <Text style={styles.highlightedText}>
              16 Yaho Street 4538808 Jerusalem
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.orderAmount}>
        <Text style={styles.orderDetailsTitle}>Order Details</Text>
        <View style={styles.orderDetail}>
          <Text style={styles.orderDetailText}>Document Translations</Text>
          <Text style={styles.orderDetailPrice}><Text style={styles.highlightedText}>170$</Text></Text>
        </View>
        <View style={styles.orderDetail}>
          <Text style={styles.orderDetailText}>Shipping</Text>
          <Text style={styles.orderDetailPrice}><Text style={styles.highlightedText}>30$</Text></Text>
        </View>
        <View style={styles.orderDetail}>
          <Text style={styles.orderDetailText}>Delivery Time</Text>
          <Text style={styles.orderDetailPrice}><Text style={styles.highlightedText}>10 Days</Text></Text>
        </View>
        <View style={[styles.orderDetail, { borderTopWidth: 1, borderTopColor: "#e6e6e6", marginTop: 10, marginBottom: 10 , paddingTop: 10}]}>
          <Text style={styles.totalAmountText}>Total Amount</Text>
          <Text style={styles.totalAmountPrice}><Text style={styles.highlightedText}>200$</Text></Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("checkout")}
          >
            <Text style={styles.buttonText}>Accept Offer and Pay</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default AcceptedOrders;

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
    backgroundColor: "#fff",
    marginTop: 30,
  },
  text: {
    color: "#777777",
    fontSize: 13,
    fontWeight: "400",
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
  orderAmount: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#FAFAFA",
  },
  orderDetailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  orderDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  orderDetailText: {
    fontSize: 16,
    fontWeight: "300",
  },
  orderDetailPrice: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: "700",
  },
  totalAmountPrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 60,
    backgroundColor: "#153518",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 20,
    top:'150%',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
