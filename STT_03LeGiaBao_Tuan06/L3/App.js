import Screen01 from './views/Screen01';
import Screen02 from './views/Screen02';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Điện thoại" component={Screen01} />
      <Stack.Screen name="Chọn màu" component={Screen02} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
