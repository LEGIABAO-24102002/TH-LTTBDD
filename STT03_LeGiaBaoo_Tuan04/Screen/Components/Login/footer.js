import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textW}>When you agree to terms and conditions</Text>
      <Text style={styles.textF}>For got your password?</Text>
      <Text style={styles.textO}>Or login with</Text>
      <View style={styles.group}>
        <Image
          source={require("./../../../assets/facebook.png")}
          style={styles.face}
        ></Image>
        <Image
          source={require("./../../../assets/linkedin.png")}
          style={styles.zalo}
        ></Image>
        <Image
          source={require("./../../../assets/group.png")}
          style={styles.zalo}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textW: {
    fontSize: 18,
    margin: 10,
  },
  textF: {
    fontSize: 20,
    color: "#5D25FA",
    margin: 10,
  },
  textO: {
    fontSize: 20,
    margin: 10,
  },
  group: {
    flexDirection: "row",
    marginTop:40,
  },
  face:{
    width:80,
    height:60,
    backgroundColor:'blue',
  },
  zalo:{
    width:80,
    height:60,
  }
});

export default Footer;
