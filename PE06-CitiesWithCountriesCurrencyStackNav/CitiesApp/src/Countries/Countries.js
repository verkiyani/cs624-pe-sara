import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class Countries extends React.Component {
  // when user taps on a country, navigate to its detail screen
  navigate = (country) => {
    this.props.navigation.navigate('Country', {
      country: country,
      countries: this.props.countries,
      addCurrency: this.props.addCurrency
    })
  }

  render() {
    const { countries } = this.props

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}
          
          {countries.map((item, index) => (
            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
              <View style={styles.countryContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.currency}>{item.currency}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  name: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
})

export default Countries
