import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

export class About extends Component {

  state = {
    pressedButton: ''
  }

  changeColor(button) {
    this.setState({ pressedButton: button })
    console.log(this.state.pressedButton)
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={this.state.pressedButton === '1' ? styles.focusedButton : styles.button}
          onPress={() => this.changeColor('1')}
        >
          <Text style={styles.text}>1 button!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={this.state.pressedButton === '2' ? styles.focusedButton : styles.button}
          onPress={() => this.changeColor('2')}
        >
          <Text style={styles.text}>2 button!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={this.state.pressedButton === '3' ? styles.focusedButton : styles.button}
          onPress={() => this.changeColor('3')}
        >
          <Text style={styles.text}>3 button!</Text>
        </TouchableOpacity>

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