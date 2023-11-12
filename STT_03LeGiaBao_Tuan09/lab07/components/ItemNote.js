import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

export default function ItemNote({ title, contentNote, id, priority, task, userId }) {


    function handleBGColor(priority) {
        if (priority === 1) {
            return 'rgba(164, 39, 39, 0.8)'
        } else if (priority === 2) {
            return 'rgba(85, 150, 29, 0.8)'
        } else return 'rgba(71, 136, 240, 0.8)'
    }

    function handleDeleteItem(id) {
        fetch(`http://localhost:3000/dbNotes?id=${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }

    return (
        <View key={id} style={{ marginHorizontal: 20, marginVertical: 10, padding: 20, borderRadius: 20, backgroundColor: handleBGColor(priority) }}>
            <View>
                <Text
                    ellipsizeMode='tail'
                    selectable={true}
                    numberOfLines={2}
                    style={{ fontSize: 22, fontWeight: '500', fontFamily: 'sans-serif', color: '#ffffff' }}
                >{title}</Text>

                <Text
                    ellipsizeMode='tail'
                    selectable={true}
                    numberOfLines={3}
                    style={{ fontSize: 16, fontWeight: '300', fontFamily: 'sans-serif', }}
                >{contentNote}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <IconButton
                    icon="delete"
                    iconColor='#eb4123'
                    size={20}
                    onPress={() => handleDeleteItem(id)}
                />
                <IconButton
                    icon="square-edit-outline"
                    iconColor='#0be064'
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        </View>
    )
}