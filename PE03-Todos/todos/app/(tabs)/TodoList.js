import React from 'react'
import { View } from 'react-native'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
  // this function filters the todos based on the selected tab
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos
      case 'Complete':
        return todos.filter(todo => todo.complete)
      case 'Active':
        return todos.filter(todo => !todo.complete)
    }
  }

  // filter todos before rendering
  const filteredTodos = getVisibleTodos(todos, type)

  return (
    <View>
      {filteredTodos.map((todo, i) => (
        <Todo
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          key={i}
          todo={todo}
        />
      ))}
    </View>
  )
}

export default TodoList