import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  submitTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() !== '') {
      const newTodo = {
        title: inputValue,
        todoIndex: todos.length,
        complete: false,
      };
      this.setState(
        {
          todos: [...todos, newTodo],
          inputValue: '',
        },
        () => {
          console.log('State:', this.state);
        }
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          keyboardShouldPersistTaps="always" 
          style={styles.content}
        >
          <View>
            <Heading />
            <Input 
              inputValue={this.state.inputValue} 
              inputChange={this.inputChange} 
            />
            <TouchableOpacity 
              style={styles.button} 
              onPress={this.submitTodo}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 60,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    color: '#666666',
    fontSize: 18,
  },
});

export default App;
