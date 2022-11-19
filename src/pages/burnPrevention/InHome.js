import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../styles/Text'

export class InHome extends Component {
  render() {
    return (
      <View>
        <Text style={textStyle.title}>
          Prevención de las quemaduras
        </Text>
        <Text style={textStyle.content}>
        La prevención se constituye en la estrategia para evitar o disminuir la prevalencia en la presentación de las quemaduras en los diferentes grupos etarios y especialmente en la población pediátrica que es la más susceptible y vulnerable en presentar estos eventos traumáticos
        </Text>
        <Text style={textStyle.title}>
          Hogar
        </Text>
        <Text style={textStyle.content}>
          Entre las recomendaciones dadas por la OMS se encuentran elevar o cerrar las áreas de cocina, usar la electricidad para la cocción de los alimentos en vez de velas y queroseno, rediseñar las estufas para que proporcionen mayor seguridad, mejorar la construcción de viviendas e instalación de detectores de humo en los hogares y edificaciones públicas y privadas.
        </Text>
        <Text style={textStyle.content}>
          De igual forma se debe educar a los padres, debido a que muchas de las quemaduras se dan por negligencia de éstos al colocar al alcance de los niños líquidos calientes como café, sopas y otros, y por dejar a la mano cableados eléctricos expuestos o conectados a freidoras, termos eléctricos, etc.
        </Text>
      </View>
    )
  }
}

export default InHome