import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {useState} from 'react'

export default function App() {
    var [name, setName] = useState('name');
    var [password, setPassword] = useState('password');
    var account = ['abc', '123']

    function valid(){
        setName(name);
        setPassword(password);
    
        if(name != account[0])
            Alert.alert('Username is invalid');
        if(password != account[1])
            Alert.alert('Password is invalid');
        else
            Alert.alert(`Login sucessfullly!\nWelcome ${name}`);
    }

    return ( 
    <View style = { styles.container }>
        <Text style={{fontWeight: 'bold'}}>LOGIN</Text>
        <TextInput placeholder='Name'>
        </TextInput>
        <TextInput placeholder='Password' secureTextEntry={true}>
        </TextInput>
        <Button title='LOGIN' onClick={valid} color='black'>
        </Button>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffae42',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
