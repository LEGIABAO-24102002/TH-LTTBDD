import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";

const Body = () => {
  return (
    <View style={styles.container}>
      <Button style={styles.btnLogin} title="Login" color={"#E53935"}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:20,
  },
});

export default Body;
