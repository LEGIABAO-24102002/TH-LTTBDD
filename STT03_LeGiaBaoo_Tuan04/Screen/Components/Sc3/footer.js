import React from "react";
import { StyleSheet, View, Text, Image, TextInput, Button } from "react-native";

const Footer =()=>{
    return(
        <View style={styles.container}>
            <Button title="Next" color={'#e3c000'} onPress={''}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:280,
        margin:20,
    },
})


export default Footer;