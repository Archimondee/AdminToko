import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/Components/HomeScreen';

import AddScreen from './src/Components/AddScreen';
import DetailScreen from './src/Components/DetailScreen';
import EditScreen from './src/Components/EditScreen';

import Main from './src/Components/Route/Route';

export default function App() {
  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
