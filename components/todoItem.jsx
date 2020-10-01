import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const todoItem = ({item, hendlerDelete}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={() => hendlerDelete(item.key)}>
            <Text>{item.text}</Text>
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
    },
  });