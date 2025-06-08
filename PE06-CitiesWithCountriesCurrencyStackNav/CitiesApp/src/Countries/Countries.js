import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import CenterMessage from '../components/CenterMessage';

const Countries = ({ navigation, countries, addCurrency }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {countries.length ? (
          countries.map((country, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Country', {
                  country,
                  addCurrency
                })
              }
              style={styles.countryContainer}
            >
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.countryInfo}>{country.info}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <CenterMessage message="No countries added yet!" />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  countryContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#2196f3',
    padding: 10
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  countryInfo: {
    fontSize: 16,
    color: 'gray'
  }
});

export default Countries;
