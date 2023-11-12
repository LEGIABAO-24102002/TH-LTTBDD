import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function DangKy() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.titleScreen}>Sign Up</Text>
      </View>
      <View style={styles.middle}>
        <TextInput
          keyboardType='default'
          style={styles.textInputUsername}
          placeholder='User Name'
        ></TextInput>
        <TextInput
          keyboardType='email-address'
          style={styles.textInputPassword}
          placeholder='Email'
        ></TextInput>
        <TextInput
          keyboardType='visible-password'
          style={styles.textInputPassword}
          placeholder='Password'
        ></TextInput>
        <TextInput
          keyboardType='visible-password'
          style={styles.textInputPassword}
          placeholder='Confirm Password'
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

          onPress={() => { }}
        >
          <Text style={styles.textButtonLogin}>Sign Up</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FADFE3',
  },
  top: {
    flex: 0.1,
    alignSelf: 'center',
  },
  middle: {
    flex: 0.4,
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