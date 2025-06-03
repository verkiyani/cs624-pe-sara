import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack navigator for Cities
function CitiesStackScreen({ cities, addCity, addLocation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Cities"
        children={(props) => (
          <Cities {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
      <Stack.Screen
        name="City"
        children={(props) => (
          <City {...props} cities={cities} addCity={addCity} addLocation={addLocation} />
        )}
      />
    </Stack.Navigator>
  );
}

// Stack navigator for Countries
function CountriesStackScreen({ countries, addCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(props) => (
          <Countries {...props} countries={countries} addCurrency={addCurrency} />
        )}
      />
      <Stack.Screen
        name="Country"
        children={(props) => (
          <Country {...props} countries={countries} addCurrency={addCurrency} />
        )}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  // Add new city
  addCity = (city) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, { ...city, locations: [] }],
    }));
  };

  // Add location to city
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => item.id === city.id);
    const updatedCity = {
      ...this.state.cities[index],
      locations: [...this.state.cities[index].locations, location],
    };
    const cities = [
      ...this.state.cities.slice(0, index),
      updatedCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({ cities });
  };

  // Add new country
  addCountry = (country) => {
    this.setState((prevState) => ({
      countries: [...prevState.countries, country],
    }));
  };

  // Add currency to a country
  addCurrency = (currency, country) => {
    const index = this.state.countries.findIndex((item) => item.name === country.name);
    const updatedCountry = {
      ...this.state.countries[index],
      currencies: [
        ...(this.state.countries[index].currencies || []),
        currency,
      ],
    };
    const countries = [
      ...this.state.countries.slice(0, index),
      updatedCountry,
      ...this.state.countries.slice(index + 1),
    ];
    this.setState({ countries });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'Cities' }}
            children={(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="AddCity"
            options={{ title: 'Add City' }}
            children={(props) => (
              <AddCity
                {...props}
                cities={this.state.cities}
                addCity={this.addCity}
                addLocation={this.addLocation}
              />
            )}
          />
          <Tab.Screen
            name="CountriesNav"
            options={{ title: 'Countries' }}
            children={(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                addCurrency={this.addCurrency}
              />
            )}
          />
          <Tab.Screen
            name="AddCountry"
            options={{ title: 'Add Country' }}
            children={(props) => (
              <AddCountry {...props} addCountry={this.addCountry} />
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
