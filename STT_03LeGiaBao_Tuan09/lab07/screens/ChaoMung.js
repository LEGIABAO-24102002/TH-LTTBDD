import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ChaoMung({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.titleApp}>Take Notes App</Text>
            </View>
            <View style={styles.middle}>
                <Image style={styles.imageBanner} source={require('../assets/img/cbd33958db626cdbdaca604107b23b16.png')}></Image>
            </View>
            <View style={styles.middle1}>
                <Text style={styles.titleSlogan}>Save and share notes</Text>
            </View>
            <View style={styles.middle2}>
                <Pressable
                    style={({ pressed }) => ([styles.buttonSignUp, {
                        backgroundColor: pressed ? '#c4bbf0' : '#6B4EFF',
                    }])}

                    onPress={() => navigation.navigate('DangKy')}
                >
                    <Text style={styles.textButtonSignUp}>Create account</Text>
                </Pressable>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.textAccount}>Have an account?</Text>
                <Pressable onPress={() => navigation.navigate('DangNhap')}>
                    {({ pressed }) => (pressed ? <Text style={styles.textButtonSignInClick}>Login</Text>
                        : <Text style={styles.textButtonSignIn}>Login</Text>)}
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FADFE3',
    },
    top: {
        flex: 0.1,
    },
    middle: {
        flex: 0.3,
        marginVertical: 50
    },
    middle1: {
        flex: 0.2,
    },
    middle2: {
        flex: 0.2,
    },
    bottom: {
        flex: 0.4,
        flexDirection: 'row',
    },
    titleApp: {
        fontFamily: 'sans-serif',
        fontSize: 32,
        color: '#6B4EFF',
        fontWeight: '700',
        marginVertical: 20,
    },
    imageBanner: {
        flex: 1,
        width: 300,
        height: null,
        resizeMode: 'contain',

    },
    titleSlogan: {
        fontFamily: 'sans-serif',
        fontSize: 24,
        color: '#000000',
        fontWeight: '500',
        marginVertical: 20,

    },
    buttonSignUp: {
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 40,

    },
    textButtonSignUp: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '300',
    },
    textAccount: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        color: '#000000',
        fontWeight: '300',
    },
    buttonSignIn: {

    },
    textButtonSignInClick: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        color: '#c4bbf0',
        fontWeight: '300',
        marginLeft: 10,
    },
    textButtonSignIn: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        fontWeight: '300',
        color: '#6B4EFF',
        marginLeft: 10,
    },
})