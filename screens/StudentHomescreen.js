import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import MyHeader from '../components/MyHeader'
import {Header} from 'react-native-elements';

export default class StudentHomescreen extends Component{
   constructor(){
    super()
    this.state={
     userId: firebase.auth().currentUser.email 
    } 
   }   
    
   render(){
    return(
     <View style={styles.container}>        
      <Header
        title="Student"
        navigation={this.props.navigation}       
      />
      <Image
       source={require('../assets/animation_500_kjsleezq.gif')}
       style={{width: 40,height:80}}
      />
      <Text style={styles.welcomeText}>Welcome Back!</Text>             
     </View>   
    )   
   }
}

const styles = StyleSheet.create({
    container:{
      flex: 1  
    },
    welcomeText:{
      fontWeight: 'bold',
      color: '#696969'
    }
})