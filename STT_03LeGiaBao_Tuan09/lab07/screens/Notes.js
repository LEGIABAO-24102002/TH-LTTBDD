import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NOTES from '../data/NotesData'
import ItemNote from '../components/ItemNote'
import { FAB } from 'react-native-paper'



export default function Notes({ navigation, route }) {
  const [notes, setNotes] = useState([]);

  console.log(route.params?.userid);
  useEffect(() => {
    fetch(`http://localhost:3000/dbNotes?userId=${route.params?.userid}`)
      .then((res) => res.json())
      .then((data) => {
        setNotes([...notes, ...data])
        console.log(data)
      })
  }, [])

  function handleDeleteItem(id) {
    fetch(`http://localhost:3000/dbNotes?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
  {/* <Text style={styles.textAlert}>There are no take notes</Text> */ }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SafeAreaView>
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <ItemNote
                title={item.title}
                contentNote={item.contentNote}
                id={item.id}
                task={item.task}
                userId={item.userId}
                priority={item.priority}
              >
              </ItemNote>
            )}
            keyExtractor={item => item.id}
            initialNumToRender={5}
          >
          </FlatList>

        </SafeAreaView >
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('ThemNote')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FADFE3',
  },
  top: {
    flex: 1,
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
  fab: {
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
  textAlert: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    color: '#6B4EFF',
    fontWeight: '300',
  }
})