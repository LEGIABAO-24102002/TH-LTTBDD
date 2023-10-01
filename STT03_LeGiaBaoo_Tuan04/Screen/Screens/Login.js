import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Components/Login/header";
import Body from "../Components/Login/body";
import Footer from "../Components/Login/footer";

const Login = () => {
    return(
        <View style={styles.container}>
            <Header/>
            <Body/>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#31AA5230'
    }
})

export default Login;