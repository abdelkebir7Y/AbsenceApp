import React from 'react';
import {View ,Text , StyleSheet} from 'react-native';


export default function ProfileScreen() {
    return (
      <View style={styles.container}>
          <Text> Profil Screen </Text>
      </View>
    );
  }

  
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });