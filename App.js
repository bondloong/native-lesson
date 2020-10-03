import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { key: 1, text: 'buy coffee'},
    { key: 2, text: 'create an app'},
    { key: 3, text: 'play on the switch'},
  ])
  const hendlerDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  const handlerSubmite = (todo) => {
    if (todo.length > 2){
      setTodos((prevTodos) => {
        return [
          {key: (todos.length+1), text: todo},
          ...prevTodos
        ]
      })
    }else {
      Alert.alert('OOPS!', 'Todo must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handlerSubmite={handlerSubmite} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem hendlerDelete={hendlerDelete} item={item}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    flex: 1,
  }
});
