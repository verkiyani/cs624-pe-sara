import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ submitTodo }) => (
  <TouchableOpacity style={styles.button} onPress={submitTodo}>
    <Text style={styles.text}>Submit</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 45,
    margin: 20,
    backgroundColor: '#3A95FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Button;
