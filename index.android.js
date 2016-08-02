/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import message from './temp.js'

class Myapp extends Component {
  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>{message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4b400'
  },
  header: {
    color: '#050505',
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: "center"
  }
})

AppRegistry.registerComponent('Myapp', () => Myapp)
