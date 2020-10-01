import React, {useState} from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native'

const addTodo = ({handlerSubmite}) => {
    const [todo, setTodo] = useState('')

    const handlerChange = (val) => {
        setTodo(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={'new todo..'}
                onChangeText={handlerChange}
            />
            <Button onPress={() => handlerSubmite(todo)} title='add todo' color='coral'/>
        </View>
    )
}

export default addTodo

const styles = StyleSheet.create({
    input: {
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    }
})
