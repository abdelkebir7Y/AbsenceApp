import React, { useContext } from "react";
import { View, Text,StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export function OfflineBar() {
  
    return (
        <View style={[StyleSheet.absoluteFill , styles.container] }>
            <MaterialCommunityIcons name="signal-off" size={20} color="white" />
            <Text style={styles.text}>Votre appareil a perdu la connexion internet</Text>
        </View>
    );
}

  
const styles = StyleSheet.create({
    
    container:{
        flexDirection :'row',
        backgroundColor: '#f00',
        borderColor: '#f02',
        borderWidth:1,
        alignItems :'center',
        justifyContent: 'center',
        height : 45,
        padding:20,
    },
    text : {
        color: '#fff',
        paddingLeft :6
    }
  });