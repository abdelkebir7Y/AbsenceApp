import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {BASE_URL} from '../config/index'
import Button from '../components/Button';
import { Camera } from 'expo-camera';
import {OfflineBar} from '../components/OfflineBar'
import { NetworkContext } from '../contexts/NetworkProvider';
import {SquareQrCode} from '../components/SquareQrCode';
import Loading from '../components/Loading';
import QrcodeSccess from '../components/QrcodeSuccess';
import QrcodeError from '../components/QrcodeError';
import { UserContext } from '../contexts/UserContext';

export function QrCodeScreen ({navigation}) {
  const {user} = React.useContext(UserContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [message, setMessage] = useState('');
  const [loading , setLoading] = React.useState(false);
  const [focus, setFocus] = useState(true);
  const [modalVisibleSuccess, setModalVisibleSuccess] = useState(false);
  const [modalVisibleError, setModalVisibleError] = useState(false);

  const network = React.useContext(NetworkContext);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    navigation.addListener('focus', () => {
      setFocus(true);
    });
    navigation.addListener('blur', () => {
      setFocus(false);
    });
    
  }, [navigation]);

  const handleBarCodeScanned = async({ data }) => {
    setLoading(true);
    setScanned(true);
      try { await fetch(BASE_URL+'/qrcode', {
        method: 'post',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        qrcode: `${data}`,
        id : user.id
        }),
    })
        .then(res => res.json())
        .then(res => {
          if(res.message === 'The payload is invalid.'){
            setModalVisibleError(true);
            setTimeout (async () => {setModalVisibleError(false)} , 4000);
            setMessage('Le code que vous avez scanner est invalide');
          }else {
            setMessage(res.message);
            setModalVisibleSuccess(true);
            setTimeout (async () => {setModalVisibleSuccess(false)} , 4000);
          }
        });
    }catch(e){
      setMessage('Serveur ne répond pas');
    }
    setLoading(false);
  };

  if (hasPermission === false) {
    return <Text style={{flex : 1 ,justifyContent : 'center' , alignItems : 'center'}}>donnez les permission à AbsencesApp pour utilisé la caméra</Text>;
  }

  return (
    <View style={styles.container}>
      
      {focus && (<Camera 
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={[StyleSheet.absoluteFill , styles.camera]}
        />)}
      <SquareQrCode />
      <QrcodeSccess 
        propsModalVisible={modalVisibleSuccess} 
        message={message}
        />
      <QrcodeError 
        propsModalVisible={modalVisibleError} 
        message={message}
        />
      <View >
        {(network === 'Online') && scanned && <Button title={'cliquez ici pour scanner le code'} style ={styles.button} onPress={() => setScanned(false)} />}
      </View>
      {
        (network === 'Offline')? 
          <OfflineBar/> 
          : null
      }
      <Loading loading={loading} message='Traitement...'/>
    </View>
    
  );
}

const styles = StyleSheet.create({
    
    container:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    button :{ 
      backgroundColor : 'rgba(0,0,0,0.5)' ,
      paddingHorizontal : 0,
      marginBottom : 6,
      width : 250,
      alignSelf : 'center'
    },
    camera : {
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    }
  });