import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChaoMung from '../screens/ChaoMung';
import DangNhap from '../screens/DangNhap';
import DangKy from '../screens/DangKy';
import Notes from '../screens/Notes';
import ThemNote from '../screens/ThemNote';
import ChinhSuaNote from '../screens/ChinhSuaNote';



const Stack = createNativeStackNavigator();

export default function StackTakeNotes() {
    return (
        <Stack.Navigator
            initialRouteName="DangNhap" // khoi tao route 
            backBehavior="history"
        >
            <Stack.Screen name="ChaoMung" component={ChaoMung} />
            <Stack.Screen
                // options={({ navigation, route }) => ({
                //     headerRight: (() => (<PressableCustom
                //         colorRiple='rgba(187, 187, 187, 1)'
                //         onPress={() => { }}
                //     >
                //     </PressableCustom>))
                // })}
                name="DangNhap"
                component={DangNhap}
            />
            <Stack.Screen name="DangKy" component={DangKy} />
            <Stack.Screen name="Notes" component={Notes} />
            <Stack.Screen name="ThemNote" component={ThemNote} />
            <Stack.Screen name="ChinhSuaNote" component={ChinhSuaNote} />
        </Stack.Navigator>
    );
}
