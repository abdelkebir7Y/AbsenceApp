import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';


export  function AbsenceScreen({navigation}) {
  const user = React.useContext(UserContext);
  return (
    <View style={styles.container}>
        <Text>absence ..............</Text>
        <Text>{user.email}</Text>
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