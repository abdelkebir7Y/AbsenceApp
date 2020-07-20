
import React, { useState } from "react";
import { View, Text,StyleSheet ,TouchableOpacity ,ScrollView ,Image} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import Input from '../components/Input';
import Button from '../components/Button';
import { UserContext } from '../contexts/UserContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {BASE_URL} from '../config/index';
import Success from "../components/Success";


export function ProfileScreen() {
  const [show , setShow] = useState(false);
  const [password , setPassword] = useState('');
  const [nPassword , setNPassword] = useState('');
  const [cPassword , setCPassword] = useState('');
  const [loading , setLoading] = React.useState(false);
  const [error , setError] = React.useState();
  const [success , setSuccess] = React.useState();
  const {user} = React.useContext(UserContext);
  const handleShow = () => {
    setShow(!show);
    setPassword('');
    setNPassword('');
    setCPassword('');
    setError(undefined);
  }
  const handleChangPassword = async ()=>{
    setError(undefined);
    if(password === ''){
      setError('N\'oubliez pas de renseigner votre mot de passe actuel');
    }else if(nPassword.length < 6) {
      setError('Votre mot de passe doit contenir au moins 6 caractères')
    }else if(cPassword.length === 0) {
      setError('N\'oubliez pas de confirmer votre mot de passe')
    }else if(cPassword !== nPassword ){
      setError('Les mots de passe que vous avez renseignés ne sont pas identiques')
    } else {
      setLoading(true);
      try { await fetch(BASE_URL+'/changePassword', {
          method: 'post',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          email: user.email,
          password: password,
          nPassword : nPassword
          }),
      })
          .then(res => res.json())
          .then(res => {
              if (res.code === 200)
              {
                setLoading(false);
                setShow(false);
                setSuccess('Le mot de passe a bien été mis à jour');
                setTimeout (async () => {setSuccess(undefined) } , 6000);
              }
              else  {
                  setError(res.message);
              }
          });
      }catch(e){
          setError('erreur de serveur... veuillez réessayer ultérieurement');
      }
      setLoading(false);
    }
    
  }
    return (
      <View style = {{flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <Image 
                source ={require('../userImage/avatar.png')}
                style={styles.image}
            />
            <Text style={styles.name}>{user.name} </Text>
            {
                (success !== undefined)?
                  <View style ={{marginTop : 32 ,marginLeft:0}}>
                    <Success error={success}/> 
                  </View>
                : null
            }
            <View style={styles.userInfo}>
              <View style={{borderWidth : 0.5, margin : 3}}/>
              <View style= {{flexDirection : 'row' , paddingLeft :6}}>
                <Entypo name="email" size={24} color="black" />
                <Text style={styles.text}>Email : {user.email}</Text>
              </View>
              
              <View style={{borderWidth : 0.5, margin : 3}}/>
              <View style= {{flexDirection : 'row' , paddingLeft :6}}>
                <AntDesign name="check" size={24} color="black" />
                <Text style={styles.text}>Classe : {user.classe}</Text>
              </View>
              
              <View style={{borderWidth : 0.5, margin : 3}}/>
              <View style= {{flexDirection : 'row' , paddingLeft :6}}>
                <AntDesign name="check" size={24} color="black" />
                <Text style={styles.text}>Groupe : {user.groupe}</Text>
              </View>

              <View style={{borderWidth : 0.5 , margin : 3 , marginBottom : 0}}/>
              <View style={{borderWidth : 0.5, margin : 3}}/>
            </View>
            <View style={styles.userInfo}>
              <View style={{borderWidth : 0.5, margin : 3}}/>
              <TouchableOpacity style= {{flexDirection : 'row' , paddingLeft :6}} onPress={handleShow}>
                <FontAwesome name="key" size={24} color="black" />
                <Text style={styles.text}>Changer le mot de passe</Text>
              </TouchableOpacity>
              <View style={{borderWidth : 0.5 , margin : 3 , marginBottom : 0}}/>
              {
                show ? (
                  <View style = {{paddingHorizontal : 10 , borderWidth : 1, margin : 2}}>
                      {
                          (error !== undefined)?
                            <View style ={{marginTop : 32}}>
                              <Error error={error}/> 
                            </View>
                          : null
                      }
                    <Input 
                          style={styles.input} 
                          placeholder='Votre mot de passe actuel' 
                          inputType='password' 
                          autoCapitalize='none'
                          onChangeText={setPassword}
                          value={password}
                      />
                    <Input 
                          style={styles.input} 
                          placeholder='Votre nouveau mot de passe' 
                          inputType='password' 
                          autoCapitalize='none'
                          onChangeText={setNPassword}
                          value={nPassword}
                      />
                    <Input 
                          style={styles.input} 
                          placeholder='Confirmez votre nouveau mot de passe' 
                          inputType='password' 
                          autoCapitalize='none'
                          onChangeText={setCPassword}
                          value={cPassword}
                      />
                    <Button 
                        title='Je modifie mon mot de passe ' 
                        style={styles.button} 
                        onPress={ handleChangPassword } 
                    />
                  </View>
                ) : null
              }
              <View style={{borderWidth : 0.5 , margin : 3 , marginBottom : 0}}/>
              <View style={{borderWidth : 0.5, margin : 3}}/>
            </View>
          </View>
        </ScrollView>
        <Loading loading={loading} message='Traitement...'/>
      </View>
      
    );
  }

  
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        paddingHorizontal : 6,
        paddingVertical : 20,
        alignItems: 'center',
    },
    image : {
      width :125,
      height : 125
    },
    name:{
      borderWidth : 2,
      paddingVertical : 3,
      paddingHorizontal : 16,
      borderRadius : 4,
      fontSize : 20,
      fontStyle: 'italic'
    },
    userInfo : {
      borderWidth : 2,
      marginHorizontal : 6 , 
      width : '100%',
      marginTop : 24
    },
    text : {
      marginLeft : 6,
      fontSize : 16,
    },
    input :{
      borderWidth : 0,
      borderBottomWidth : 1,
      paddingBottom : 0,
    },
    button :{
      marginVertical : 6,
      marginHorizontal : 30,
      paddingHorizontal : 0,
      paddingVertical : 12
    }
  });