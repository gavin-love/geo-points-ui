import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import firebase from 'react-native-firebase';

const App = createStackNavigator({
  Home: { screen: Landing },
  SignUp: { screen: SignUp }
})

export default App;


