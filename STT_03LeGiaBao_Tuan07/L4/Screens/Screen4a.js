import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import dataApi from "../database/DataBaseScreen4a";

// Component Item
const Item4a = ({ data, onPress, backgroundColor }) => (
  <Pressable style={[styles.itemStyle, { backgroundColor }]} onPress={onPress}>
    <Image
      style={styles.productPreview}
      source={require(`../assets/${data.imagePreview}`)}
    />
    <View style={{ flex: 1, alignSelf: "flex-start", marginTop: 10 }}>
      <View>
        <Text style={{ fontSize: 16 }}>{data.titleProduct}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16 }}>Shop</Text>
        <Text style={{ fontSize: 16, color: "red", marginLeft: 20 }}>
          {data.nameShop}
        </Text>
      </View>
    </View>
    <View style={{ width: 70, flex: 0.5, marginRight: 10 }}>
      <Button title="Chat" color="hsla(0, 91%, 51%, 1)"></Button>
    </View>
  </Pressable>
);

export default function Screen4a() {
  const [idItem, setIdItem] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === idItem ? "#d9d9d9" : "#FFFFFF";
    console.log(idItem);
    return (
      <Item4a
        data={item}
        onPress={() => setIdItem(item.id)}
        backgroundColor={backgroundColor}
      ></Item4a>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        <Image
          style={styles.icon}
          source={require("../assets/ant-design_arrow-left-outlined.svg")}
        />
        <Text style={styles.text}>Chat</Text>
        <Image
          style={styles.icon}
          source={require("../assets/bi_cart-check.svg")}
        />
      </View>

      {/* Middle */}
      <View style={styles.middle}>
        <View>
          <Text
            style={{
              fontSize: 16,
              borderBottom: "1px solid hsla(0, 0%, 77%, 1)",
              padding: 10,
            }}
          >
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>
        <FlatList
          data={dataApi}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={setIdItem}
        ></FlatList>
      </View>

      {/* Bottom */}
      <View style={styles.bottom}>
        <Image
          style={styles.icon}
          source={require("../assets/drawer-tab.svg")}
        />
        <Image style={styles.icon} source={require("../assets/home.svg")} />
        <Image style={styles.icon} source={require("../assets/back.svg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },

  //Top Screen
  top: {
    height: 50,
    backgroundColor: "hsla(203, 100%, 55%, 1)",
    flexDirection: "row",
  },

  //Middle Screen
  middle: {
    flex: 10,
  },
  //Bottom Screen
  bottom: {
    height: 50,
    backgroundColor: "hsla(203, 100%, 55%, 1)",
    flexDirection: "row",
  },

  //icon style
  icon: {
    width: null,
    height: 30,
    flex: 0.5,
    resizeMode: "contain",
    margin: 10,
  },

  //Text style
  text: {
    fontSize: 32,
    color: "white",
  },

  //Item style
  itemStyle: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },

  //Product preview image
  productPreview: {
    flex: 0.1,
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});