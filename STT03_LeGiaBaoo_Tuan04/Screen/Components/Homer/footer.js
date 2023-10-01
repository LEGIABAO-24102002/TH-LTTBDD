import React from "react";
import { StyleSheet, View, Text, Image, Button, } from "react-native";

const Footer = () =>{
    return(
        <View style={styles.container}>
            <button style={styles.button}>LOGIN</button>
            <button style={styles.button}>SIGN UP</button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',     
      },
    button:{
        width:120,
        height:40,
        backgroundColor:'#e3c000',
        marginTop:200,
        borderRadius:'10px',
        border:'none',
    }
})

export default Footer;