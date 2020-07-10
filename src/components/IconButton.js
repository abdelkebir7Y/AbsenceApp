import React from 'react';
import { TouchableOpacity} from 'react-native';
import { SimpleLineIcons} from '@expo/vector-icons';

export function IconButton({name ,size , color, style, onPress}) {
  return (
      <TouchableOpacity style={style} onPress={onPress}>
       <SimpleLineIcons name={name} size={size} color={color} />
      </TouchableOpacity>
    
    );
}
