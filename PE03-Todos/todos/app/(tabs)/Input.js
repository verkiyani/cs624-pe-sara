import { View, TextInput, StyleSheet } from 'react-native';

// This component shows an input field where the user types a todo
const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      // this shows the current text typed by the user
      value={inputValue} 
      style={styles.input}
      // this is the grey text before typing
      placeholder="What needs to be done?" 
      placeholderTextColor="#CACACA"
      selectionColor="#666666" 
      // removes the underline on Android
      underlineColorAndroid="transparent" 
      // I don’t want autocorrect for this input
      autoCorrect={false} 
      // when user types, this function is called
      onChangeText={inputChange} 
    />
  </View>
);

// Here I add some styles to the input box and its container
const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }, 
  },
  input: {
    height: 60, 
    backgroundColor: '#ffffff', 
    paddingLeft: 10,
    paddingRight: 10, // adds some space inside the inpu
  },
});


export default Input;
