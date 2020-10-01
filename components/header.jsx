import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
  });