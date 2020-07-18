import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {BASE_URL} from '../config/index'
import Button from '../components/Button';
import { Camera } from 'expo-camera';

export default function HelpScreen ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async({ data }) => {
    setScanned(true);
    alert(`${data}`);
    console.log(`${data}`);
      try { await fetch(BASE_URL+'/qrcode', {
        method: 'post',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        qrcode: `${data}`
        }),
    })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setMessage(res.message);
          alert(res.message);
        });
    }catch(e){
        alert(e);
    }
  };

  if (hasPermission === false) {
    return <Text>donnez les permission à AbsencesApp pour utilisé la caméra</Text>;
  }

  return (
    <View
      style={styles.container}>
      <Camera 
        style={{ flex: 1 }}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill , styles.camera]}
      />
      <Animatable.View animation="bounceInDown"  duration ={2000} >
        {scanned && <Button title={'cliquez ici pour scanner le code'} style ={styles.button} onPress={() => setScanned(false)} />}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
    
    container:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor : '#343a40',
    },
    button :{ 
      backgroundColor : '#343a40' ,
    },
    camera : {
      flex: 1,
      alignItems: 'center',
    }
  });