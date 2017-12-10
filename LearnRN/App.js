/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio
} from 'react-native';
const {height, width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    let aValue;
    console.log('Render has been executed.');
    console.log('Screen height is:' + height);
    console.log('Screen width is:' + width);
    console.log('aValue is:' + aValue);
    console.log('The type of aValue is:' + typeof(aValue));

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          逻辑像素等于{pixelRatio}实际像素单位
        </Text>
        <Text style={styles.instructions}>
          手机屏幕高度为{height}逻辑像素
        </Text>
        <Text style={styles.instructions}>
          手机屏幕宽度为{width}逻辑像素
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
