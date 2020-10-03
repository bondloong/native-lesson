import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const todoItem = ({item, hendlerDelete}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => hendlerDelete(item.key)} >
            <Feather style={styles.itemDelete} name="delete" size={24} color="black"/>
            <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default todoItem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 10,
    },
    itemDelete: {
        transform: ([{ rotate: '180deg' }]),
    }
  });