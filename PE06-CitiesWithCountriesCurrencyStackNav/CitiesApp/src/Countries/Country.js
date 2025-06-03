import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class Country extends React.Component {
  state = {
    name: '',
    info: ''
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }

  addCurrency = () => {
    const { name, info } = this.state
    const params = this?.props?.route?.params || {}
    const country = params.country
    const addCurrency = params.addCurrency

    if (!name || !info || !country || !addCurrency) return

    const newCurrency = { name, info }
    addCurrency(newCurrency, country)

    this.setState({ name: '', info: '' })
  }

  render() {
    const params = this?.props?.route?.params || {}
    const countries = params.countries || []
    const country = params.country || { name: '', currency: '', currencies: [] }

    const updatedCountry = countries.find(c => c.name === country.name) || country
    const currencyList = updatedCountry.currencies || []

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!currencyList.length && { flex: 1 }]}>
          <View style={[styles.container, !currencyList.length && { justifyContent: 'center' }]}>
            {!currencyList.length && (
              <CenterMessage message="No currencies added yet." />
            )}

            {currencyList.map((cur, index) => (
              <View key={index} style={styles.currencyContainer}>
                <Text style={styles.currencyName}>{cur.name}</Text>
                <Text style={styles.currencyInfo}>{cur.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <TextInput
          placeholder="Currency name"
          placeholderTextColor="white"
          value={this.state.name}
          onChangeText={val => this.onChangeText('name', val)}
          style={styles.input}
        />

        <TextInput
          placeholder="Currency info"
          placeholderTextColor="white"
          value={this.state.info}
          onChangeText={val => this.onChangeText('info', val)}
          style={[styles.input, styles.input2]}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 104
  },
  currencyContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  currencyName: {
    fontSize: 20
  },
  currencyInfo: {
    color: 'rgba(0, 0, 0, .5)'
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  }
})

export default Country
