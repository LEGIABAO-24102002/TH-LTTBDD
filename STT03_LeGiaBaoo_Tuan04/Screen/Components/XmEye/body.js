import React from "react";
import { StyleSheet, View, Text, TextInput, Image ,Button} from "react-native";

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupUP}>
        <Image
          source={require("./../../../assets/User.png")}
          style={styles.imgUser}
        ></Image>
        <TextInput
          style={styles.textInputUser}
          placeholder="Please input user name"
        ></TextInput>
      </View>{" "}
      <View style={styles.groupUP}>
        <Image
          source={require("./../../../assets/Pass.png")}
          style={styles.imgPass}
        ></Image>
        <TextInput
          style={styles.textPass}
          placeholder="Please input password"
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  groupUP: {
    flexDirection: "row",
  },
  imgUser: {
    width: 30,
    height: 30,
  },
  imgPass: {
    width: 30,
    height: 30,
    marginTop: 40,
  },
  textInputUser: {
    fontSize: 16,
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "gray",
    padding: 10,
    paddingLeft: 20,
  },
  textPass: {
    fontSize: 16,
    height: 40,
    width: 300,
    marginTop: 40,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "gray",
    padding: 10,
  },
});

export default Body;
