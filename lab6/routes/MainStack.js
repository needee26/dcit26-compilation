//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2


import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer =  createDrawerNavigator(); 

const MainNavigator = () => {
      return (
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack}
             options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}/>
          ),
        }}
            />
            <Drawer.Screen name="About" component={AboutStack} options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <AntDesign name="user" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}/>
          </Drawer.Navigator>
        </NavigationContainer>
      );
       
}




export default  MainNavigator;