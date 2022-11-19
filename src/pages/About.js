import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { imageStyle } from '../styles/Image';

export class About extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', alignContent: 'space-around' }}>
        <View>
          <Image source={require('../resources/Images/Escaldadura1.jpg')} style={imageStyle.profile}></Image>
        </View>


        {/* <View style={{ flex: 1, backgroundColor: "red", flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: "blue" }}>

          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>

          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}>

          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}>

        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  focusedButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    backgroundColor: '#e69138'
  }
});

export default About