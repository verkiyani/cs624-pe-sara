import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
     
      <Image source={require('../../assets/images/icon.png')} style={styles.logo} />

     
      <Text style={styles.question}>Which course did you like?</Text>
      <TextInput style={styles.input} placeholder="ex. CS624" />

     
      <Text style={styles.sectionHeader}>Core Requirements{"\n"}(24 credits)</Text>
      <Text style={styles.course}>CS 504 Software Engineering</Text>
      <Text style={styles.course}>CS 506 Programming for Computing</Text>
      <Text style={styles.course}>CS 519 Cloud Computing Overview</Text>
      <Text style={styles.course}>CS 533 Computer Architecture</Text>
      <Text style={styles.course}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.course}>CS 622 Discrete Math and Algorithms for Computing</Text>
      <Text style={styles.course}>DS 510 Artificial Intelligence for Data Science</Text>
      <Text style={styles.course}>DS 620 Machine Learning & Deep Learning</Text>

     
      <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
      <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
      <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>

      <Text style={styles.sectionHeader}>capstone course (3 Credits)</Text>
      <Text style={styles.course}>CS 457 Capstone</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 20,
  },
  course: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default App;
