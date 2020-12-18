import React from 'react';
import { StyleSheet, View, Dimensions, Modal } from 'react-native';

export default ({children, visibility}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visibility}
    >
      <View style={styles.center}>
        <View style={styles.modalView}>
          {children}
        </View>      
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView:{
    backgroundColor:'#fff',
    borderRadius:4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset:{
        width:0,
        height:3
    }
  },

  map:{
    flex:1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
