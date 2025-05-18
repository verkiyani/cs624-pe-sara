import React, { Component } from 'react';
// Add text
import { Image, StyleSheet, View, Text } from 'react-native';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/sara.png')}
            />
          </View>
          <Text style={styles.nameText}>Sara Verkiyani</Text>
          <Text style={styles.occupationText}>React Native Developer</Text>
          <Text style={styles.descriptionText}>
            Sara is a really great developer. She loves using JS to build React Native applications for iOS and Android.
          </Text>

        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
  },

  nameText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 15,
  },
  occupationText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 20,
    textAlign: 'center',
  },

});