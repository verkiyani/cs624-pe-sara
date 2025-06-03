import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class Countries extends React.Component {
  render() {
    const { countries } = this.props

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {/* If no countries are added yet, show a message */}
          {!countries.length && <CenterMessage message="No saved countries!" />}

          {/* Display each country in the list */}
          {countries.map((item, index) => (
            <View key={index} style={styles.countryContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
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
