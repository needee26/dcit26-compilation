//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2


import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import home from '../screens/home';
import profile from '../screens/profile';



const Stack =  createStackNavigator(); 


const HomeStack = () => {
      return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Profile" component={profile} />
            </Stack.Navigator>
      );
}

export default  HomeStack;