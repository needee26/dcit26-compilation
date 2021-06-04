import { Text, View, Button, TextInput, StyleSheet, ImageBackground  } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
//AQUINO RENZO JOAQUIN M.
//AURE JOSHUA CLARK
//BOST KENT AJ
//BSCS 3-2

export default function App() {

  const [enteredValue, setEnteredValue] = useState('');
  const [courseValue, setCourseValue] = useState([]);

  const goalInputHandler = (enteredtext) =>{
    setEnteredValue(enteredtext);
  };

  const addValueHandler = () => {
    setCourseValue(currentValue => [...currentValue, enteredValue]);
    setEnteredValue("");
  };

  return (
   <View style={styles.screen}>
      <View style={styles.inputContainer}>
      
        <TextInput
          style={styles.input}
          placeholder='Enter Item'
          onChangeText={goalInputHandler}
          value={enteredValue}/>
        <Button color='black' title = "Add" onPress={addValueHandler}  />
      </View>
      <View>{
        courseValue.map((value) => <Text style={styles.items}>{value}</Text>)
      }
      </View>
      </View>
  );
  
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor:'orange',
    flex: 1
    },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2
  },
  input:{
    width: '77%',
    borderColor: 'white',
    backgroundColor: 'black',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    color:'white'
  },
  items: {
    backgroundColor: "black",
    padding: 10,
    marginVertical: 2,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    color:'white'
  },
  
});
