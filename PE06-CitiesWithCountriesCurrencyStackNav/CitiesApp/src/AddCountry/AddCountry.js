import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../theme'

class AddCountry extends React.Component {
  state = {
    name: '',
    currency: ''
  }

  // when user types something in the input fields
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  // when user presses the button to add a country
  submit = () => {
    const { name, currency } = this.state
    if (name === '' || currency === '') {
      alert('Please complete the form')
      return
    }

    // create country object
    const newCountry = {
      name,
      currency
    }

    // call the method passed from App.js
    this.props.addCountry(newCountry)

    // reset the form
    this.setState({ name: '', currency: '' }, () => {
      this.props.navigation.navigate('Countries')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>

        <TextInput
          placeholder="Country name"
          style={styles.input}
          value={this.state.name}
          onChangeText={(val) => this.onChangeText('name', val)}
        />

        <TextInput
          placeholder="Currency"
          style={styles.input}
          value={this.state.currency}
          onChangeText={(val) => this.onChangeText('currency', val)}
        />

        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    height: 50,
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#666',
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
})

export default AddCountry
