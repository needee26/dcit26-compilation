//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2
import React from 'react';
import {
    View,
    Text,
    Button,
    ImageBackground, 
    StyleSheet
} from 'react-native';

const Home = ({navigation}) => {
    return(
        <ImageBackground 
          source={require('../assets/w2.jpg')} style={{ flex: 1}}>
           <View style={styles.container}>
              <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
           </View>
        </ImageBackground>

    );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
