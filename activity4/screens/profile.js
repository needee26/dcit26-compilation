//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2

import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ImageBackground 
} from 'react-native';

const Profile = ({navigation}) => {
    return(
          <ImageBackground 
          source={require('../assets/w2.gif')} style={{ flex: 1}}>
            <View style={styles.container}>
            <Button color="grey" title="Go Back Home" onPress={() => navigation.navigate('Home')}/>
            </View>
          </ImageBackground>
    );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});