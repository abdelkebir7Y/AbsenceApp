import React from 'react';
import { StyleSheet} from 'react-native';
import { IconButton } from './IconButton';

export function HeaderIconButton({name ,onPress}) {
  return (
      <IconButton style={styles.container}
      name={name} 
      size={32} 
      color='#007bff' 
      onPress={onPress}/>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight : 16,
  },
}); 