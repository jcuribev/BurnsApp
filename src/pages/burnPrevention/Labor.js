import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../styles/Text'
import { YoutubePlayer } from '../../components/YoutubePlayer'

export class Labor extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={textStyle.title}>
          Prevención de las quemaduras
        </Text>
        <Text style={textStyle.content}>
        La prevención se constituye en la estrategia para evitar o disminuir la prevalencia en la presentación de las quemaduras en los diferentes grupos etarios y especialmente en la población pediátrica que es la más susceptible y vulnerable en presentar estos eventos traumáticos
        </Text>
        <Text style={textStyle.title}>
          Laborales
        </Text>
        <Text style={textStyle.content}>
          Se recomienda seguir realizando campañas educativas encaminadas a la prevención y concientización del control de los factores de riesgo en el contexto laboral frente a la exposición que implica el incumplimiento de las normas de seguridad propias de cada profesión u ocupación desempeñada, el uso de equipamientos de protección personal y ropa ignífuga en  actividades laborales de riesgo donde haya una posibilidad de exposición.
        </Text>
      </View>
    )
  }
}

export default Labor