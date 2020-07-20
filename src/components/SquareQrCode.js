import React from 'react';
import {View , StyleSheet ,Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export function SquareQrCode(){
    return (
        <View style={styles.container}>
            <View style = {styles.square}>
                <View style={{flex : 1 , flexDirection : 'row' }}>
                    <View style = {[{flex : 1 } , styles.leftTop]} />
                    <View style = {{flex : 4 ,}} />
                    <View style = {[{flex : 1 } , styles.rightTop]} />
                </View>
                <View style={{flex : 4 ,}}/>
                <View style={{flex : 1 , flexDirection : 'row' }}>
                    <View style = {[{flex : 1 } , styles.leftBottom]} />
                    <View style = {{flex : 4 ,}} />
                    <View style = {[{flex : 1 } , styles.rightBottom]} />
                </View>
            </View>
        </View>
    );
}
const styles =  StyleSheet.create( {
    container : {
        ...StyleSheet.absoluteFill,
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    square :{
        width : width * 0.9,
        height : width * 0.9,
        backgroundColor:'transparent',
        
    },
    leftTop : {
        borderColor : 'white',
        borderLeftWidth : 3,
        borderTopWidth : 3,
    },
    rightTop : {
        borderColor : 'white',
        borderRightWidth : 3,
        borderTopWidth : 3,
    },
    leftBottom : {
        borderColor : 'white',
        borderBottomWidth : 3,
        borderLeftWidth : 3,
    },
    rightBottom : {
        borderColor : 'white',
        borderRightWidth : 3,
        borderBottomWidth : 3,
    },
})