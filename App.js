import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StudentHomescreen from './screens/StudentHomescreen'
import AdministratorHomescreen from './screens/AdministratorScreen'
import MainScreen from './screens/MainScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import TeacherHomescreen from './screens/TeacherHomescreen';
import Settings from './screens/Settings';

export default class App extends Component {
  render(){
  return (
    <SafeAreaProvider>    
      <AppContainer/>
    </SafeAreaProvider>
  
  );
  }
}


const SwitchNavigator = createSwitchNavigator({
   MainScreen: {screen: MainScreen},
   StudentHomescreen: {screen: StudentHomescreen},
   TeacherHomeScreen: {screen: TeacherHomescreen},
   Settings: {screen: Settings} 
})

const AppContainer = createAppContainer(SwitchNavigator)