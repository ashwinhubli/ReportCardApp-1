import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import StudentHomescreen from '../screens/StudentHomescreen';
import TeacherHomescreen from '../screens/TeacherHomescreen';


export const AppTabNavigator = createBottomTabNavigator({
   SendReports:{
     screen: TeacherHomescreen,
     navigationOptions:{
        tabBarIcon:<Image source={} style={{width:20,height:20}} /> ,
        tabBarLabel:"Teacher"    
    },
    GetReports:{
      screen: StudentHomescreen,
      navigationOptions:{
        tabBarIcon:<Image/>,
        tabBarLabel: "Student"  
      }  
    }     
   } 
})