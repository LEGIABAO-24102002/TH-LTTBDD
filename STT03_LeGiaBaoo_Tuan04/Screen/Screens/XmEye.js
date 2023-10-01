import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Header from "../Components/XmEye/header";
import Body from "../Components/XmEye/body";
import Footer from "../Components/XmEye/footer";

const XmEye = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});

export default XmEye;
