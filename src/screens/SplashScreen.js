import React , { useState, useEffect }  from 'react';
import { StyleSheet, Text, Dimensions,View ,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

const window = Dimensions.get("window");
var height_logo = window.height * 0.15;;  

export  function SplashScreen () {
    const [dimensions, setDimensions] = useState({window});

    const onChangeDimension = ( window ) => {
        height_logo = window.window.height * 0.15;
        setDimensions(window);
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChangeDimension);
        return () => {
        Dimensions.removeEventListener("change", onChangeDimension);
        };
    });
    return (
        <View style ={styles.container }>
            <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate" duration ={3000} >
                <Image 
                    source ={require('../logo/logo.png')}
                    style={styles.logo}
                />
            </Animatable.View>
            <Animatable.View animation="bounceIn" iterationCount={1} direction="alternate" duration ={3000} >
                <Text style={styles.logoTitle}>AbsenceApp</Text>
            </Animatable.View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor :'#007bff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    logoTitle:{
        color : '#f8f9fa',
        fontSize : 30,
        fontWeight : 'bold',
    },
    logo :{
        width : height_logo,
        height : height_logo,
    },
  });