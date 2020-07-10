import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Button from '../components/Button';

export  function QrCodeScreen ({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`${data}`);
  };

  if (hasPermission === false) {
    return <Text>donnez la permission à AbsencesApp pour utilisé la caméra</Text>;
  }

  return (
    <View
      style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
      <Animatable.View animation='fadeInDown'>
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
  });