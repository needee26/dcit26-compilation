//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2


import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import about from '../screens/about';
import {Image} from 'react-native';



const Stack =  createStackNavigator(); 

const AboutStack = () => {
      return (
            <Stack.Navigator>
                <Stack.Screen name="About" component={about}/>
            </Stack.Navigator>
      );
}

export default  AboutStack;