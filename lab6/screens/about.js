//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2

import * as React from 'react';
import { Button, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

const About = ({navigation}) => {
      return (
        <ImageBackground 
          source={require('../assets/w4.gif')} style={{ flex: 1}}>
        <View style={styles.container}>
           <Button title = "Back" color="black" onPress = {()=>navigation.goBack()} />
        </View>
        </ImageBackground>
      );
}

export default  About;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});