import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { Rating } from "react-native-ratings";
import dataApi from "../database/DataBaseScreen4b";

// Component Item
const Item4b = ({ data, onPress, backgroundColor, typePrice }) => (
  <Pressable style={[styles.itemStyle, { backgroundColor }]} onPress={onPress}>
    <Image
      style={styles.productPreview}
      source={require(`../assets/${data.imagePreview}`)}
    />{" "}
    {/* Anh san pham */}
    <Text style={{ fontSize: 20, fontWeight: 300, margin: 5 }}>
      {data.titleProduct} {/* Tieu de san pham */}
    </Text>
    <View style={{ flexDirection: "row" }}>
      <Rating
        imageSize={20}
        onFinishRating={(rating) => console.log("Đã được đánh giá", rating)}
        startingValue={data.rating}
        style={{ paddingVertical: 5 }}
      />
      {/*  rating bar */}
      <Text>({data.reviewProduct})</Text> {/* Danh gia san pham */}
    </View>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ fontSize: 20, fontWeight: 700, margin: 5 }}>
        {data.priceProduct}
        {typePrice}
        {/*  Gia san pham va loai tien */}
      </Text>
      <Text
        style={{ fontSize: 16, color: "gray", marginLeft: 5, fontWeight: 300 }}
      >
        -{data.id}% {/* Phan tram duoc giam gia */}
      </Text>
    </View>
  </Pressable>
);

export default function Screen4b() {
  const [idItem, setIdItem] = useState(); /* Lay id san pham*/
  const [inputSearch, setInputSearch] = useState('');
  /* Lay du lieu nhap tu O tim kiem
   */
  /* Thuc hien render item duoc lay tu props [data] o flatlist => [item] callback */
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === idItem ? "#d9d9d9" : "#FFFFFF";
    console.log(idItem);
    return (
      <Item4b
        data={item}
        onPress={() => setIdItem(item.id)}
        backgroundColor={backgroundColor}
        typePrice="đ"
      ></Item4b>
    );
  };

  const handleSearchText = () => {
    return setInputSearch(inputSearch)
  }


  return (
    <View style={styles.container}>
      {/* Top */}
      <View style={styles.top}>
        <Image
          style={styles.icon}
          source={require("../assets/ant-design_arrow-left-outlined.svg")}
        />
        <Image
          style={styles.icon}
          source={require("../assets/search-bi.png")}
        />
        <TextInput
          placeholder="Nhập tên sản phẩm cần tìm"
          inputMode="search"
          style={{
            width: 200,
            margin: 5,
            padding: 5,
            backgroundColor: "white",
          }}
          value={inputSearch}
          onChangeText={() => handleSearchText()}
        ></TextInput>

        <Image
          style={styles.icon}
          source={require("../assets/bi_cart-check.svg")}
        />
        <Image style={styles.icon} source={require("../assets/advanced.svg")} />
      </View>

      {/* Middle */}
      <View style={styles.middle}>
        <FlatList
          numColumns={2}
          data={dataApi}
          renderItem={renderItem} //Co the thuc hien call back o day neu thuc hien xi li don gian
          keyExtractor={(item) => item.id} // key cho tung item de phan biet dom tuong tu props.key reactjs
          extraData={setIdItem} //render Item phu thuoc vao
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
    flex: 1,
    border: "1px solid grey",
    margin: 10,
  },

  //Product preview image
  productPreview: {
    flex: 0.1,
    width: null,
    height: 150,
    resizeMode: "cover",
  },
});