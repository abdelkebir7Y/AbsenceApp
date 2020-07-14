import React from 'react';
import { StyleSheet, Text ,View } from 'react-native';

export default function Error({error}) {
  return (
      <View  style={[styles.container]}>
          <Text style={[styles.text]} >{error}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop :-16,
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth:1,
    borderRadius :8,
    alignItems : "center",
    justifyContent : 'center',
  },
  text : {
    textAlign :'center',
    padding : 6,
    color: '#721c24',
    paddingVertical: 8,
  },
});