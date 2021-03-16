import React, { Component } from 'react';
import { Image, Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Touchables extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {Alert.alert("Notifications");}} >
          <View style={styles.button1}>
            <Image style={styles.buttonImg} source={require('./images/images_1.png')}/>
            <Text style={styles.buttonText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Menu');}} >
          <View style={styles.button1}>
            <Image style={styles.buttonImg} source={require('./images/images_2.png')}/>
            <Text style={styles.buttonText}>Menu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Notice');}}>
          <View style={styles.button2}>
           <Image style={styles.buttonImg} source={require('./images/images_3.png')}/>
            <Text style={styles.buttonText}>Notice </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Rules');}} >
          <View style={styles.button2}>
          <Image style={styles.buttonImg} source={require('./images/images_4.png')}/>
            <Text style={styles.buttonText}>Dormitory {"\n"}Rules</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {Alert.alert('Inquiries');}}>
          <View style={styles.button2}>
          <Image style={styles.buttonImg} source={require('./images/images_5.png')}/>
            <Text style={styles.buttonText}>Inquiries</Text>
          </View>
        </TouchableOpacity>
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