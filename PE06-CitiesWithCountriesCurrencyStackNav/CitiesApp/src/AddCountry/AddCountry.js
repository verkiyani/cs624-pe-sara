import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';

export default class AddCountry extends Component {
  state = {
    name: '',
    info: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (this.state.name === '' || this.state.info === '') return;
    const country = {
      name: this.state.name,
      info: this.state.info,
      id: uuid.v4()
    };
    this.props.addCountry(country);
    this.setState({ name: '', info: '' });
    this.props.navigation.navigate('CountriesNav');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Country name"
          value={this.state.name}
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Country info"
          value={this.state.info}
          onChangeText={val => this.onChangeText('info', val)}
        />
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#2196f3',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
