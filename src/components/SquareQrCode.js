import React from 'react';
import {View , StyleSheet ,Dimensions} from 'react-native';

const {witdth} = Dimensions.get('screen');
export function SquareQrCode(){
    <View style={styles.container}>
        <View style = {styles.square}>
            
        </View>
    </View>
}
const styles =  StyleSheet.create( {
    container : {
        ...StyleSheet.absoluteFill,
        flex : 1,
        backgroundColor : 'red',
    },
    square :{
        ...StyleSheet.absoluteFill,
        backgroundColor : 'green',
        witdth : witdth * 0.8,
        height : witdth * 0.8,
        
    }
})