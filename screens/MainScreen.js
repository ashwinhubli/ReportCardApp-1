import React from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import {Header} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class MainScreen extends React.Component{
    constructor(){
      super()
    }
    studentLogin=(studentEmailId,studentPassword)=>{
      firebase.auth().signInWithEmailAndPassword(studentEmailId,studentPassword)
      .then(()=>{
        this.props.navigation.navigate('Student')  
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
    teacherLogin=(teacherEmailId,teacherPassword)=>{
        firebase.auth().signInWithEmailAndPassword(teacherEmailId,teacherPassword)
        .then(()=>{
          this.props.navigation.navigate('Teacher')  
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }
      AdministerLogin=async()=>{
         this.props.navigation.navigate('AdministratorHomescreen')  
      }      
    render(){
      return(
        <View>
           <Header 
             centerComponent={{text: 'Report-Card App'}} style={{color:'#ffff', fontWeight:'200', fontSize:20 }}
             backgroundColor="green"
           />
           <View style={styles.profileContainer}>
             <TextInput
          style={styles.loginBox}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              studentEmailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              studentPassword: text
            })
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{this.studentLogin()}}>
          <Text style={styles.buttonText}>Login As A Student</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.profileContainer}>
        <TextInput
          style={styles.loginBox}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              teacherEmailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              teacherPassword: text
            })
          }}
        />
        <TouchableOpacity style={styles.button} onPress={()=>{this.teacherLogin()}}>
          <Text style={styles.buttonText}>Login As A Teacher</Text>
        </TouchableOpacity>
        </View>
        </View>  
      )  
    }
}

const styles = StyleSheet.create({
  loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
  button:{ 
    width:300, 
    height:75, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"#ff9800", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 8, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16, 
    padding: 10
   }, 
   buttonText:{
     color:'#ffff', 
     fontWeight:'200', 
     fontSize:20 
  },
  profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', }, 

})