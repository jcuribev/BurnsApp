import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { drawerItems, drawerSubItems } from './DrawerItemsMain';
import CustomDrawer from './CustomDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Introduction } from '../pages/Introduction';
import WhatToDo from '../pages/WhatToDo';
import Prevention from '../pages/Prevention';
import MainScreen from '../pages/MainScreen';
import About from '../pages/About';
import TestScreen from '../pages/TestScreen';
import Definition from '../pages/home/Definition';
import References from '../pages/References';
import PagesOfInterest from '../pages/PagesOfInterest';
import Clasification from '../pages/home/Clasification';
import Functional from '../pages/home/complications/Functional';
import Aesthetic from '../pages/home/complications/Aesthetic';
import Labor from '../pages/burnPrevention/Labor';
import InHome from '../pages/burnPrevention/InHome';
import TypeOfBurns from '../pages/TypeOfBurns';

const Map = {
  "Home": Introduction,
  "Introduction": Introduction,
  "Test": TestScreen,
  "Prevention": Prevention,
  "WhatToDo": WhatToDo,
  "References": References,
  "PagesOfInterest": PagesOfInterest,
  "About": About,
  "TypesOfBurns": TypeOfBurns,
  "Definition": Definition,
  "Clasification": Clasification,
  "Functional": Functional,
  "Aesthetic": Aesthetic,
  "Labor": Labor,
  "InHome": InHome,
}

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer drawerItems={drawerItems} {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ebebeb",
        },
        drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: "white"
      }}
    >
      {
        drawerItems.map((item) => {
          return (
            <Drawer.Screen key={item.key} name={item.title} component={Map[item.key]} />
          )
        })
      }
    </Drawer.Navigator >
  )
}

export default NavigationDrawer