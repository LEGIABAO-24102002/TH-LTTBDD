import React from "react";
import { StyleSheet, View, Text, Image, TextInput,Button } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN</Text>
      <TextInput style={styles.textInput} placeholder="Email"></TextInput>
      <View>
        <TextInput style={styles.textInput} placeholder="Password"></TextInput>{" "}
        <Image
          source={require("./../../../assets/eye.png")}
          style={styles.imgEye}
        />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textLogin: {
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: 20,
  },
  textInput: {
    width: 330,
    height: 54,
    padding: 10,
    backgroundColor: "#C4C4C44D",
    marginTop: 60,
    fontSize: 16,
  },
  imgEye: {
    width: 38,
    height: 36,
    position: "absolute",
    marginTop: 70,
    marginLeft:270,
  },
  btnLogin:{
    width:330,
  }
});

export default Header;
