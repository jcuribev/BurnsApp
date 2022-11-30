import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../../styles/Text'

export class Aesthetic extends Component {
  render() {
    return (
      <View>
        <Text style={textStyle.title}>Estéticas</Text>
      </View>
    )
  }
}

export default Aesthetic