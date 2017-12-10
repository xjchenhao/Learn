/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';

let widthOfMargin = Dimensions.get('window').width * 0.05;

export default class loginLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: ''
    };
    this.updatePW = this.updatePW.bind(this);
  }

  updateNum(newText) {
    this.setState((state) => {
      return {
        inputedNum: newText
      }
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
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}
                   onChangeText={(newText)=>this.updateNum(newText)}
        />
        <Text style={styles.textPromptStyle}>
          您输入的手机号：{this.state.inputedNum}
        </Text>
        <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true}
                   onChangeText={this.updatePW}
        />
        <Text style={styles.bigTextPrompt}>
          确定
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20
  },
  textPromptStyle: {
    margin: widthOfMargin,
    fontSize: 20,
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  }
});

// AppRegistry.registerComponent('LearnRN', () => LearnRN);
