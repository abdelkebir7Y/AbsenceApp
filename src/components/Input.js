import React , { useState, useEffect } from 'react';
import { StyleSheet,TextInput ,Dimensions , TouchableOpacity} from 'react-native';
import { View } from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons'; 

const window = Dimensions.get("window");

export default function Input({style, ...props}) {
  const [dimensions, setDimensions] = useState({window});
  const [secureText, setSecureText] = useState(true);

  const onChangeDimension = ( window ) => {
    setDimensions(window);
  };

  const updateSecureTextEntry =() => {
    setSecureText(!secureText);
  };
  
  useEffect(() => {
    Dimensions.addEventListener("change", onChangeDimension);
    return () => {
      Dimensions.removeEventListener("change", onChangeDimension);
    };
  });

  return ( !(props.placeholder == 'Mot de passe') ? (
              <View style={[styles.container , style]}>
              <FontAwesome name="envelope" size={24} color="black" style={styles.iconLeft }/>
              <TextInput {...props} style={{width : dimensions.window.width -32-50-30-2}} />
            </View>
          ) : ( 
            <View style={[styles.container , style]}>
              <FontAwesome name="unlock-alt" size={25} color="black" style={styles.iconLeft} />
              <TextInput 
                {...props} 
                style={{width : dimensions.window.width -32-50-30-2}}
                secureTextEntry = {secureText}
                textContentType ='password'
                 />
                  <TouchableOpacity style={styles.iconRight } onPress={updateSecureTextEntry } >
                    {secureText ?
                      <FontAwesome name="eye-slash" size={24} color="black"  />
                    :
                      <FontAwesome name="eye" size={24} color="black"  />
                    }
                  </TouchableOpacity>
            </View>
            
          )
  );
}


const styles = StyleSheet.create({
  iconLeft: {
    marginRight : 10,
  },
  container: {
    flexDirection : 'row',
    backgroundColor: '#f8f9fa',
    width: '100%',
    padding:15,
    borderColor : '#000',
    borderWidth : 1,
    borderRadius:8,
  },
  iconRight:{
    marginRight : 0,
  }
});