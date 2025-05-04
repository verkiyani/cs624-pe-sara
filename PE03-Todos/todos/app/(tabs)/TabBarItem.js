import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

// This is a single tab inside the TabBar
const TabBarItem = ({ title, setType, type }) => (
  <TouchableHighlight
    underlayColor="#efefef"
    // when I tap, update the filter
    onPress={() => setType(title)} 
    style={[
      styles.item,
      // if this tab is active, add style
      type === title && styles.selected 
    ]}
  >
    <Text style={[
      styles.itemText,
      // make the text bold if selected
      type === title && styles.bold 
    ]}>
      {title}
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    borderTopWidth: 3,
    borderTopColor: '#3A95FF'
  },
  itemText: {
    fontSize: 16,
    color: '#666'
  },
  bold: {
    fontWeight: 'bold',
    color: '#000'
  }
})

export default TabBarItem
