import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../theme'

class AddCountry extends React.Component {
  state = {
    name: '',
    currency: ''
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  submit = () => {
    const { name, currency } = this.state
    if (name === '' || currency === '') {
      alert('Please complete the form')
      return
    }

    const newCountry = {
      name,
      currency
    }

    this.props.addCountry(newCountry)

    // Go back to CountriesNav tab (not a nested screen)
    this.setState({ name: '', currency: '' }, () => {
      this.props.navigation.navigate('CountriesNav')
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
