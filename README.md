# React-Native in Expo

https://github.com/bjpublic/Reactnative

## create-react-native-app 설치하고 사용하기

```bash
npm install -g create-react-native-app
```

## 리액트 네이티브 앱 실행하기

```bash
create-react-native-app testProject
```

## 앱 실행하기

```bash
npm start
```

### Expo 설치하고 사용하기

```bash
npm install -g expo-cli
```

```bash
expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start
```

{Platform.OS !== 'android' ? '(Android only)' : 'android'}

```js
// CustomButton.js

import React, { Component } from 'react';
import { Image, Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            top: 0 // Initial value
        };
    }

  onclick = () => {
    console.log('On click works')
    this.setState( { top: this.state.top + 5 }) // 5 is value of change.
};


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={() => {Alert.alert('회원가입 버튼');}} >
      
             <Image
            style={styles.buttonImg}
            source={require('./images/images_1.png')}/>
            <Text style={styles.buttonText}>Notifications</Text>
          
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onclick} style={{flexDirection:"row"}}>
          <View style={styles.button1}>
            <Image
            style={styles.buttonImg}
            source={require('./images/images_2.png')}/>
            <Text style={styles.buttonText}>Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          
          <View style={styles.button2}>
           <Image
            style={styles.buttonImg}
            source={require('./images/images_3.png')}/>
            <Text style={styles.buttonText}>Notice </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this.onclick}
            >
          <View style={styles.button2}>
          <Image
            style={styles.buttonImg}
            source={require('./images/images_4.png')}/>
            <Text style={styles.buttonText}>Dormitory {"\n"}Rules</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button2}>
          <Image
            style={styles.buttonImg}
            source={require('./images/images_5.png')}/>
            <Text style={styles.buttonText}>Inquiries</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 180,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
    button1: {
    borderRadius: 10,
    height: 170,
    width: 155,
    marginLeft:10,
    marginRight:13,
    marginBottom: 20,
    backgroundColor: '#ffffff'
  },
  button2: {
    borderRadius: 10,
    marginLeft:10,
    marginRight:8,
  
    marginBottom: 30,
    width: 100,
    height: 170,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
   
    color: 'black'
  },
  buttonImg: {
    marginTop: 50,
    height:40,
    width:40,
    alignSelf: "center",
    
  }
});
```
