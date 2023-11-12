import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function DangNhap({ navigation, route }) {

    const [username, setUsername] = useState('jiag293');
    const [password, setPassword] = useState('10101010');
    const [verify, setVerify] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/dbUser')
            .then((res) => res.json())
            .then((data) => {
                handleLogin(data)
            })
    }, [verify]);

    function handleLogin(dbuser) {
        console.log(username, password);

        if (username || password) {
            let un = dbuser.some((elem) => (username == elem.userName || username == elem.email))

            let pwd = dbuser.some((elem) => password == elem.password)

            let userid = dbuser.filter((elem, index) => username == elem.userName || username == elem.email);

            if (un) {
                if (pwd) {
                    navigation.navigate('Notes', { userid: userid[0].userId })
                }
                console.log('Login Failed');
            } console.log('Login Failed');
        } else console.log('Please Input!!')
    }


    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Text style={styles.titleScreen}>Login</Text>
            </View>

            <View style={styles.middle}>
                <TextInput
                    onChangeText={(e) => setUsername(e)}
                    value={username}
                    style={styles.textInputUsername}
                    placeholder='Email or User Name'
                    keyboardType='default'
                ></TextInput>
                <TextInput
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    style={styles.textInputPassword}
                    placeholder='Password'
                    keyboardType='visible-password'
                ></TextInput>
            </View>

            <View style={styles.middle1}>
                <Text style={styles.textPolicy}>By continuing, you agree to our </Text>
                <Pressable onPress={() => { }}>
                    {({ pressed }) => (pressed ? <Text style={styles.textPolicyReadClick}>Terms of Service</Text>
                        : <Text style={styles.textPolicyRead}>Terms of Service</Text>)}
                </Pressable>
                <Text style={styles.textPolicy}> and </Text>
                <Pressable onPress={() => { }}>
                    {({ pressed }) => (pressed ? <Text style={styles.textPolicyReadClick}>Privacy Policy.</Text>
                        : <Text style={styles.textPolicyRead}>Privacy Policy.</Text>)}
                </Pressable>
            </View>

            <View style={styles.bottom}>
                <Pressable
                    style={({ pressed }) => ([styles.buttonLogin, {
                        backgroundColor: pressed ? '#c4bbf0' : '#6B4EFF',
                    }])}

                    onPress={() => setVerify(verify + 1)}
                >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FADFE3',
        height: '100%'
    },
    top: {
        flex: 0.2,
        alignSelf: 'center',
    },
    middle: {
        flex: 0.2,
        marginVertical: 100,
        marginHorizontal: 20,
    },
    middle1: {
        flex: 0.1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginTop: 100,

    },
    bottom: {
        flex: 0.15,
        marginVertical: 20
    },
    titleScreen: {
        fontFamily: 'sans-serif',
        fontSize: 32,
        color: '#000000',
        fontWeight: '700',
        marginVertical: 20,
    },
    textInputUsername: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 5,
        fontSize: 18,
    },
    textInputPassword: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 5,
        fontSize: 18,
    },
    buttonLogin: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 30,
        marginHorizontal: 20,
    },
    textButtonLogin: {
        fontFamily: 'sans-serif',
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        alignSelf: 'center',
    },
    textPolicy: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: '#000000',
        fontWeight: '300',
    },
    textPolicyRead: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: '#6B4EFF',
        fontWeight: '300',
    },
    textPolicyReadClick: {
        fontFamily: 'sans-serif',
        fontSize: 13,
        color: '#c4bbf0',
        fontWeight: '300',
    },
})