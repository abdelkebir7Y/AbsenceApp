import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({title , style ,onPress}) {
  return (
      <TouchableOpacity style={[styles.container , style]} onPress={onPress}>
          <Text  style={styles.text} >{title} </Text>
      </TouchableOpacity>
      
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#007bff',
        padding: 15,
        paddingHorizontal: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

  },
  text: {
        color : 'white',
        fontWeight: '500',
        fontSize : 16,
  },
});