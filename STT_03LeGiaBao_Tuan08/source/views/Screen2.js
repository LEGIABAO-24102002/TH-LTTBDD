import React, { useState } from "react";
import {StyleSheet,View,Text,Image,TextInput,SectionList,FlatList,Pressable,} from "react-native";
import { useRoute } from "@react-navigation/native";

export const Screen2 = ({ navigation }) => {
  const route = useRoute();
  var item = route.params;
  const [checked, setChecked] = useState([]);

  const handleChecked = (id) => {
    if (!checked.includes(id)) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((checkedID) => checkedID !== id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/IMG/arrow.png")}
            style={styles.img1}
          />
        </Pressable>

        <View style={styles.view_1}>
          <Image
            source={require("../../assets/IMG/man.png")}
            style={styles.img}
          />
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text1}>Have a good day</Text>
          </View>
        </View>
      </View>

      <View style={styles.view1}>
        <Image
          source={require("../../assets/IMG/smart.png")}
          style={styles.img2}
        />
        <TextInput style={styles.textIn} placeholder="Search"></TextInput>
        <Image
          source={require("../../assets/IMG/smart.png")}
          style={styles.imgSe}
        />
      </View>

      <View style={styles.view2}>
        <FlatList
          data={item}
          renderItem={({ item }) => (
            <View>
              <View style={styles.view3}>
                <Pressable onPress={() => handleChecked(item.id)}>
                  {checked.includes(item.id) ? (
                    <Image
                      source={require("../../assets/IMG/checkbox.png")}
                      style={styles.img3}
                    ></Image>
                  ) : (
                    <Image
                      source={require("../../assets/IMG/nocheck.png")}
                      style={styles.img3}
                    />
                  )}
                </Pressable>

                <Text style={styles.text2}>{item.job}</Text>
                <Pressable>
                  <Image
                    source={require("../../assets/IMG/edit.png")}
                    style={styles.img3}
                  />
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.view4}>
        <Pressable>
          <Image
            source={require("../../assets/IMG/plus.png")}
            style={styles.img4}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  view_1: {
    flexDirection: "row",
    alignItems: "center",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  view2: {
    marginTop: 30,
    alignItems: "center",
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    height: 80,
    width: 400,
    padding: 20,
    backgroundColor: "#89CFF3",
    borderRadius: 20,
  },
  view4: {
    margin: 20,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  img1: {
    width: 20,
    height: 20,
  },
  img2: {
    width: 30,
    height: 30,
    position: "relative",
    left: 40,
  },
  img3: {
    width: 30,
    height: 30,
  },
  img4: {
    width: 50,
    height: 50,
  },
  imgSe: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
  text1: {
    fontSize: 16,
  },
  text2: {
    fontSize: 18,
    width: 200,
    textAlign: "center",
  },
  textIn: {
    height: 50,
    width: 400,
    borderRadius: 10,
    backgroundColor: "#D2E3C8",
    padding: 10,
    paddingLeft: 80,
    fontSize: 18,
    fontWeight: 500,
    color: "#ffff",
  },
});
