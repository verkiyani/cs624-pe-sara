import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

// Set the profile photo
const userImage = require('../../assets/images/sara.png');

// Create data for 6 carts
const data = [
  {
    image: userImage,
    name: 'Sara Verkiyani 1',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Verkiyani 2',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Verkiyani 3',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Verkiyani 4',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Verkiyani 5',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Sara Verkiyani 6',
    occupation: 'React Native Developer',
    description: 'Sara is a really great JavaScript developer. She loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true
  }
];

// Show cart
const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;

  // select the style according to thumbnail
  const cardStyle = showThumbnail ? styles.cardContainerSmall : styles.cardContainerLarge;

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={[cardStyle, styles.cardBase]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data };
  }

  // Change thumbnail on clicking
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: { showThumbnail: { $set: showThumbnail } }
      })
    });
  };

  render() {
    const list = this.state.data.map((item, index) => (
      <ProfileCard
        key={`card-${index}`}
        image={item.image}
        name={item.name}
        occupation={item.occupation}
        description={item.description}
        onPress={() => this.handleProfileCardPress(index)}
        showThumbnail={item.showThumbnail}
      />
    ));

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {list}
      </ScrollView>
    );
  }
}

// back ground color
const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20
  },

  cardBase: {
    alignItems: 'center',
    backgroundColor: profileCardColor,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 10,
    paddingBottom: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },

  // cart in small mode
  cardContainerSmall: {
    width: '95%',
    height: 250
  },

  // cart in big mode
  cardContainerLarge: {
    width: '95%',
    height: 450
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },

  cardImage: {
    width: 60,
    height: 60
  },

  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: { height: 2, width: 2 },
    textShadowRadius: 2
  },

  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1
  },

  cardOccupation: {
    fontWeight: 'bold',
    fontSize: 13,
    marginVertical: 5,
    color: 'white'
  },

  cardDescription: {
    fontStyle: 'italic',
    fontSize: 12,
    marginHorizontal: 10,
    textAlign: 'center',
    color: 'white',
    flexWrap: 'wrap',
    flexShrink: 1
  }
});
