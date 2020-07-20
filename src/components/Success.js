import React from 'react';
import { StyleSheet, Text ,View } from 'react-native';

export default function Success({error}) {
  return (
      <View  style={[styles.container]}>
          <Text style={[styles.text]} >{error}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop :-16,
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth:1,
    borderRadius :8,
    alignItems : "center",
    justifyContent : 'center',
  },
  text : {
    textAlign :'center',
    padding : 6,
    color: '#155724',
    paddingVertical: 8,
  },
});