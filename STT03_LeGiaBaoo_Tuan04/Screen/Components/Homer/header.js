import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/Ellipse 8.png")}
        style={styles.imgEllipse}
      ></Image>
      <Text style={styles.textGrow}>
        GROW <br />
        YOUR BUSINESS
      </Text>
      <Text style={styles.textGrow1}>We will help you to grow your business using online server</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  imgEllipse: {
    width: 140,
    height: 140,
    marginTop:70,
  },
  textGrow: {
    marginTop: 50,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Roboto-Bold",
    fontSize: "25px",
    fontWeight: "700",
  },
  textGrow1:{
    marginTop:50,
    textAlign:'center',
    fontSize:"16px",
    fontWeight: 'bold',
  }
});

export default Header;
