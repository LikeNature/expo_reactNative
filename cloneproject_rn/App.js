import React from 'react';
import { View, ImageBackground, TouchableOpacity, Button } from 'react-native';
import ButtonSample from './CustomButton';
import styles from './styles';


const image = require('./images/backImage.png');

export default function App() {

 

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <View style={styles.alternativeLayoutButtonContainer}>
          <ButtonSample />
        </View>
      </ImageBackground>
    </View>
  );
}
