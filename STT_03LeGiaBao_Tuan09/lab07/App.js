import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackTakeNotes from './navigation/StackTakesNote';

export default function App() {
  return (
    <NavigationContainer
    styles={styles.container}
    >
      <StackTakeNotes></StackTakeNotes>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADFE3',
  },
});
