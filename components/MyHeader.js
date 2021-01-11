import React from 'react';
import {Header,Icon} from 'react-native-elements';
import {View,Text} from 'react-native';

export default class MyHeader extends React.Component{
    constructor(props){
       super(props)
        this.state={
          userId: firebase.auth().currentUser.email,

        }
    }
    render(){
     return(
      <View>
          <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          backgroundColor = "#eaf8fe"
        />
      </View>   
     )   
    }
}