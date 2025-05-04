import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

// This component shows the row with 3 tabs
const TabBar = ({ type, setType }) => (
  <View style={styles.container}>
    <TabBarItem title="All" type={type} setType={setType} />
    <TabBarItem title="Active" type={type} setType={setType} />
    <TabBarItem title="Complete" type={type} setType={setType} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ededed',
  },
})

export default TabBar
