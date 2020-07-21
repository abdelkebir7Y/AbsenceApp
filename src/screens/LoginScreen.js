import React , { useState, useEffect }  from 'react';
import { StyleSheet, Text, Dimensions,View ,Image ,ScrollView , StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Input from '../components/Input';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import { AuthContext } from '../contexts/AuthContext';
import Loading from '../components/Loading';
import {ErrorContext} from '../contexts/ErrorContext'
const window = Dimensions.get("window");
var height_logo = window.height * 0.15;;  

export  function LoginScreen() {
    const {login} = React.useContext(AuthContext);
    const [email , setEmail] = React.useState('');
    const [password , setPassword] = React.useState('');
    const [loading , setLoading] = React.useState(false);
    let error = React.useContext(ErrorContext);
    
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
      <View style={styles.container} >
            <View style ={styles.header}>
                <Image 
                    source ={require('../logo/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoTitle}>AbsenceApp</Text>
            </View>
            <Animatable.View animation="bounceInUp"  duration ={2000} style ={styles.footer} >
                <ScrollView >
                    <View style ={{marginTop : 32}}>
                        {
                            (error !== undefined)?
                                <Error error={error.message}/> 
                            : null
                        }
                    </View>
                    
                    
                    <Input  
                        style={styles.input} 
                        placeholder='Email académique' 
                        inputType='email' 
                        keyboardType={"email-address"} 
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        value={email}
                        />
                    <Input 
                        style={styles.input} 
                        placeholder='Mot de passe' 
                        inputType='password' 
                        autoCapitalize='none'
                        onChangeText={setPassword}
                        value={password}
                    />
                    <Button 
                        title='connexion' 
                        style={styles.connexion} 
                        onPress={ async() => {
                        try{
                            setLoading(true);
                            await login(email,password);
                            setLoading(false);
                        }catch(e){
                            setLoading(false);
                        }
                        } } 
                    />
                    <TextButton 
                        title='Mot de passe oublié?'  
                        onPress={ () => {} }
                    />
                </ScrollView>
            </Animatable.View>
            <Loading loading={loading} message='Connexion...'/>
      </View>
  );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor :'#007bff',
        
    },
    header :{
        flex : 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex : 2,
        backgroundColor : '#fff',
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        paddingHorizontal : 16
    },
    logo :{
        width : height_logo,
        height : height_logo,
    },
    logoTitle:{
        color : '#f8f9fa',
        fontSize : 30,
        fontWeight : 'bold',
    },
    title :{
        color : '#05375a',
        fontSize : 30,
        fontWeight : 'bold',
    },
    text : {
        color : 'grey',
        marginTop : 5
    },
    button : {
        alignItems : 'flex-end',
        marginTop : 30,
    },
    input: {
        marginVertical: 8,
    },
    connexion: {
        marginVertical: 25,
    },
  });