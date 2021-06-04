//AQUINO RENZO JOAQUIN M. 
//AURE JOSHUA CLARK
//BOSTON KENT AJ
//BSCS 3-2
import React, { useState } from 'react';
import { View, Text, Button, Modal, ScrollView, Image, StyleSheet} from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <View style={styles.container}>
     <Button title="Click Me!" onPress={() => setIsModalOpen(true)} />
      <View style={styles.modal}>
      <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});
