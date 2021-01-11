import React from 'react';
import LottieView from 'lottie-react-native';

export default class ReportAnimation extends React.Component{
    render(){
      return(
          <LottieView
            source={require('../assets/37296-success.json')}
            style={{width:"60%"}}
            autoPlay loop
          />
      )  
    }
}