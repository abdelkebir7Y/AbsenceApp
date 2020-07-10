import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TextButton({title , style ,onPress}) {
  return (
      <TouchableOpacity style={[styles.container , style]} onPress={onPress}>
          <Text  style={styles.text} >{title} </Text>
      </TouchableOpacity>
      
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,

  },
  text: {
    color : '#007bff',
    fontWeight: '500',
    fontSize : 15,
  },
});