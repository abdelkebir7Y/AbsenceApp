import React from 'react';
import { StyleSheet} from 'react-native';
import {Heading} from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import {IconButton} from '../components/IconButton'
import { AuthContext } from '../contexts/AuthContext';
import { AuthContainer } from '../components/AuthContainer';
export  function RegistrationScreen({navigation}) {
  const {registre}= React.useContext(AuthContext);
  const [email , setEmail] = React.useState('abdelkebirouhassou@outlook.fr');
  const [password , setPassword] = React.useState('123456');
  return (
    <AuthContainer>
      <IconButton 
        style={styles.closeIcon}
        name='close' 
        size={35} 
        color='#007bff' 
        onPress={ () => {navigation.pop()} }/>
      <Heading style={styles.title} > Registration </Heading>
      <Input 
        style={styles.input} 
        placeholder='Email académique' 
        keyboardType={"email-address"} 
        onChangeText={setEmail}
        value={email}
      />
      <Input 
        style={styles.input} 
        placeholder='Mot de passe' 
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button 
        title='Register' 
        style={styles.Registre} 
        onPress={ () => {registre(email,password)} } 
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 8,
    },
    title:{
        marginBottom: 48,
    },
    Registre: {
        marginVertical: 25,
    },
    closeIcon:{
        position: 'absolute',
        top: 60,
        right:16,
    },
  });