import React, { useReducer } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderIconButton} from '../components/HeaderIconButton'
import { UserContext } from '../contexts/UserContext';
export  function ScheduleScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const user = React.useContext(UserContext);
    React.useEffect( ()=>{
        navigation.setOptions({
            headerRight: () =><HeaderIconButton 
                name={'logout'} 
                onPress={ () => { logout()}}/>
        });
    },[navigation]);
  return (
    <View style={styles.container}>
        <Text>emploi de temps</Text>
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

  // {
  //   "name": "absence",
  //   "displayName": "absence",
  //   "expo": {
  //     "name": "absence",
  //     "slug": "absence",
  //     "version": "1.0.0",
  //     "assetBundlePatterns": [
  //       "**/*"
  //     ]
  //   }
  // }