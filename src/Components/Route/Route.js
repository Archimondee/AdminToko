import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from 'react-native-vector-icons';

import AddScreen from '../AddScreen';
import EditScreen from '../EditScreen';
import DetailScreen from '../DetailScreen';
import HomeScreen from '../HomeScreen';
import ListScreen from '../ListScreen';
import PembelianScreen from '../PembelianScreen';
import BuktiScreen from '../BuktiScreen'


const DashboardStack = createStackNavigator({
  Home: HomeScreen,
  Edit:EditScreen,
  Detail:DetailScreen,
  Add: AddScreen,
  List:ListScreen,
  Pembelian:PembelianScreen,
  Bukti: BuktiScreen
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })


export default Main = createAppContainer(createSwitchNavigator({
  Rumah: DashboardStack
}, {
    initialRouteName: 'Rumah',
  })
);