import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel, Input } from "./components"; 

export default function App() {

const [puntos, setPuntos] = useState([]);
const [puntoTemp, setPuntoTemp] = useState({});
const [nombres, setNombre] = useState('');
const [modalVisibility, setmodalVisibility] = useState(false);


const handleLongPress = ({nativeEvent})=>{
  setPuntoTemp(nativeEvent.coordinate);
  setmodalVisibility(true);
}

const handleChangeText = text =>{
 setNombre(text)
}

  return (
   <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel/>
      <Modal visibility={modalVisibility}>
        <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
