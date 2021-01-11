import React from 'react';
import {View} from 'react-native';

export default class Settings extends React.Component{
   constructor(){
     super()  
     this.state={
       firstName: '',
       lastName: '',
       contact: '',
       address: '',
       class: '',  
     }
    } 
     getUserDetails=()=>{
       var email = firebase.auth().currentUser.email
              

     }
    render(){
     return(
       <View>

       </View>  
     )   
    }

}