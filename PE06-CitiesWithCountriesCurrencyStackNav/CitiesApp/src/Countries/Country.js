import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default class Country extends Component {
  state = {
    name: '',
    info: ''
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addCurrency = () => {
    if (this.state.name === '' || this.state.info === '') return;
    const { route } = this.props;
    const { country, addCurrency } = route.params;

    addCurrency(country.id, {
      name: this.state.name,
      info: this.state.info
    });

    this.setState({ name: '', info: '' });
  };

  render() {
    const { route } = this.props;
    const { country } = route.params;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          {country.currencies.length ? (
            country.currencies.map((currency, index) => (
              <View key={index} style={styles.currencyContainer}>
                <Text style={styles.currencyName}>{currency.name}</Text>
                <Text style={styles.currencyInfo}>{currency.info}</Text>
              </View>
            ))
          ) : (
            <CenterMessage message="No currencies added yet!" />
          )}
        </ScrollView>

        <TextInput
          style={styles.input}
          placeholder="Currency name"
          placeholderTextColor="#fff"
          value={this.state.name}
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Currency info"
          placeholderTextColor="#fff"
          value={this.state.info}
          onChangeText={val => this.onChangeText('info', val)}
        />
        <TouchableOpacity onPress={this.addCurrency} style={styles.button}>
          <Text style={styles.buttonText}>Add Currency</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  currencyContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#2196f3',
    padding: 10
  },
  currencyName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  currencyInfo: {
    fontSize: 16,
    color: 'gray'
  },
  input: {
    backgroundColor: '#2196f3',
    color: '#fff',
    borderRadius: 5,
    margin: 5,
    padding: 10
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
