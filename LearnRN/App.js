/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry, BackHandler, Platform
} from 'react-native';

import LoginLeaf from './loginLeaf';
import WaitingLeaf from './loginLeaf';

export default class NaviModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScene: 'Login',
      phoneNumber: '',
      userPW: ''
    };
    this.handleBackSignal = this.handleBackSignal.bind(this);
    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  onLoginPressed(aNumber, aPW) {
    this.setState({
      currentScene: 'Waiting',
      phoneNumber: aNumber,
      userPW: aPW
    });
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText
      }
    });
  }

  render() {
    if (this.state.currentScene === 'Login') {
      return <LoginLeaf onLoginPressed={this.onLoginPressed}/>;
    }
    else {
      return (
        <WaitingLeaf phoneNumber={this.state.phoneNumber}
                     onGobackPressed={this.handleBackSignal}
                     userPW={this.state.userPW}/>
      )
    }
  }

  handleBackSignal() {
    if (this.state.currentScene === 'Waiting') {
      this.setState({currentScene: 'Login'})
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal);
    }
  }
  componentWillUnmount(){
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal);
    }
  }
}

AppRegistry.registerComponent('LearnRN', () => NaviModule);

