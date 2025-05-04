import { View, Text, StyleSheet } from 'react-native'

// This is a small functional component that shows the heading
const Heading = () => (
  <View style={styles.header}>
    {/* This is the big "todos" title in the middle of the screen */}
    <Text style={styles.headerText}>todos</Text>
  </View>
);

// Here I'm writing some styles for the heading
const styles = StyleSheet.create({
  header: {
    marginTop: 80 // I want some space from the top
  },
  headerText: {
    textAlign: 'center', // center the text
    fontSize: 72, // make it really big
    color: 'rgba(175, 47, 47, 0.25)', // light reddish color
    fontWeight: '100' // make the font very thin
  },
});


export default Heading;
