import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "./../Components/Homer/header";
import Footer from "./../Components/Homer/footer";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "rgba(0, 204, 249, 1), rgba(0, 204, 249, 1)",
  },
});
export default Home;
