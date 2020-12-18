import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Map from "react-native-maps";


export default ({onLongPress}) => {
  return (
    <Map onLongPress={onLongPress} style={styles.map} />     
  );
}

const styles = StyleSheet.create({
  map:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150 
  }
});
