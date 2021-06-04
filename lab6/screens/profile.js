//AQUINO, RENZO JOAQUIN M.
//AURE, JOSHUA CLARK
//BOSTON, KENT AJ
//BSCS 3-2

import * as React from 'react';
import { Button, View, StyleSheet, ImageBackground, Text, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Profile = ({route}) => {
  const data = route.params;
      return(
        <ScrollView
          style={{backgroundColor: '#f2a47d',}}>
          <View style={{flex: 1,text: 10,textTransform: 'capitalize',}}>
            <Image style={{width: 310,height: 200,resizeMode: 'cover',alignItems: 'center',justifyContent: 'center',}}
              source={{ uri: data.picture. large }}/>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>
              {'\n'}
              {data.name.title}. {data.name. first} {data.name.last}
              {'\n'}
              {'\n'}
            </Text>
            </View>
            <View style={{flex: 1,text: 10,}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Personal Information{'\n'}
              </Text>
              <Text>Age: {data.dob. age} Years Old</Text>
              <Text>Gender: {data.gender}</Text>
              <Text>Birthday: {data.dob.date}</Text>
              <Text>
                Address: {data.location.street. number} {data.location.name}
                {data.location.city}, {data.location.state}, {data.location.country}
                {data.location.postcode}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {'\n'}Contact Information{'\n'}
              </Text>
              <Text>Phone #: {data.phone}</Text>
              <Text>Cell #: {data.cell}</Text>
              <Text>Email: {data.email}</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {'\n'}Others{'\n'}
              </Text>
              <Text>Registered Date: {data.registered.date}</Text>
            </View>
          </ScrollView>
    );
}

export default  Profile;

