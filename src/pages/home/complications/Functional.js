import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../../styles/Text'

export class Functional extends Component {
  render() {
    return (
      <View>
        <Text style={textStyle.title}>Funcionales</Text>
      </View>
    )
  }
}

export default Functional