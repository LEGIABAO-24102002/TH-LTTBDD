import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/Eyecam.png")}
        style={styles.imageEye}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    margin:70,
  },
  imageEye:{
    width:112,
    height:107,
  },
});

export default Header;
