import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'
// New import: I bring in TabBar
import TabBar from './TabBar'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    // I add setType to change which tab is active
    this.setType = this.setType.bind(this)

  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }
  
  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }
  
  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  // this function updates the type of filter (All, Active, or Complete)
  setType(type) {
    this.setState({ type })
  }


  /*
    Pass the new functions (toggleComplete and deleteTodo) as props to the TodoList component.
  */
  render() {
       // extract "type" from state so we can use it below
    const { inputValue, todos, type  } = this.state
 


    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue} 
            inputChange={(text) => this.inputChange(text)} />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
            // we pass the type to TodoList
            type={type} 
          />

          <TabBar
            type={type}
            setType={this.setType} // this lets TabBar change the filter
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App