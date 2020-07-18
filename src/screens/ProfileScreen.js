
import React, { useContext } from "react";
import { View, Text,StyleSheet} from "react-native";
import {OfflineBar} from '../components/OfflineBar'
import { NetworkContext } from '../contexts/NetworkProvider';

export function ProfileScreen() {
  
  const network = useContext(NetworkContext);
  return (
    <View style={styles.container}>
      <OfflineBar/>
      <Text>You are now {network}</Text>
    </View>
  );
}
// export function ProfileScreen (){
  
//     return (
//       <View style={styles.container}>
//       </View>
//     );
// }
// // import React from 'react';
// // import {View ,Text , StyleSheet} from 'react-native';


// // export default function ProfileScreen() {
// //     return (
// //       <View style={styles.container}>
// //           <Text> Profil Screen </Text>
// //       </View>
// //     );
// //   }

  
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });