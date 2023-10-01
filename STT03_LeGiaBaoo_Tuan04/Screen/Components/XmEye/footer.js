import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Footer = () => {
  return (
    <View style={styles.container}>
      <button style={styles.btn}>LOGIN</button>
      <View style={styles.grouptext2}>
        <Text style={styles.text2}>Register</Text>
        <Text style={styles.text2}>Forgot Password</Text>
      </View>
      <View style={styles.grouptext3}>
        <Image
          source={require("../../../assets/Line 3.png")}
          style={styles.imgL3}
        />
        <Text style={styles.text3}>Other Login Methods</Text>
        <Image
          source={require("../../../assets/Line 3.png")}
          style={styles.imgL3}
        />
      </View>

      <View  style={styles.grouptext4}>
      <Image
          source={require("../../../assets/Add.png")}
          style={styles.img}
        />
        <Image
          source={require("../../../assets/Wifi.png")}
          style={styles.img}
        />
        <Image
          source={require("../../../assets/mail.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 60,
  },
  btn: {
    height: 48,
    width: 300,
    backgroundColor: "#376efb",
    boder: "none",
    borderRadius: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  grouptext2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  grouptext3: {
    flexDirection: "row",
    marginTop:40,
  },
  imgL3:{
    height:1,
    width:62,
    marginTop:12,
  },
  text3:{
    fontSize: 18,
  },
  grouptext4:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:40,
  },
  img:{
    width:74,
    height:74,
  }
});

export default Footer;
