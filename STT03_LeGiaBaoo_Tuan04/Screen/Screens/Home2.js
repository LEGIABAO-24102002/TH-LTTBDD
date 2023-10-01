import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "./../Components/Homer/header";
import Footer from "./../Components/Homer/footer";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#fff", "#fff", "rgba(0, 204, 249, 1)"]}
      style={styles.container}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "transparent"]}
          style={styles.background}
        />
        <Header />
        <Footer />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
export default Home;
