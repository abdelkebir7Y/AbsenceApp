import React from 'react';
import { StyleSheet, Text, ActivityIndicator,View} from 'react-native';

export default function Loading({loading}) {
    if (!loading) {
        return <View/>
    }
    return (
      <View style = {styles.overlay}>
        <View style={styles.container}>
            <ActivityIndicator color={'#007bff'}/>
            <Text style={styles.text}>Connexion...</Text> 
        </View>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 15,
        // paddingHorizontal: 48,
        
        // borderRadius: 8,

  },
  container:{
    backgroundColor: 'white',
    flexDirection: 'row',
    padding : 20,
    borderRadius : 8,
  },
  text: {
        color : '#007bff',
        marginLeft : 14,
        fontWeight: '500',
        fontSize : 16,
  },
});