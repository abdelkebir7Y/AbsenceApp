import { HelpScreen } from '../screens/HelpScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';

const ProfileStack = createStackNavigator();

export function HelpNavigator({navigation}) {
    return (
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor : '#007bff'
        },
        headerTitleStyle: {
          fontWeight : 'bold',
        },
        headerRightContainerStyle : {
          paddingRight : 16, 
        }
      }}>
          <ProfileStack.Screen name="Helpscreen" component={HelpScreen} options={{
                title:'',
                headerLeft : () => (
                    <TouchableOpacity onPress={ ()=> navigation.pop() } style = {styles.backButton}>
                        <AntDesign name="back" size={26} color="white" />
                        <Text style = {styles.text}>Retour</Text>
                    </TouchableOpacity>
                )
            }} />
      </ProfileStack.Navigator>
    );
  }

  const styles  = StyleSheet.create ({
    backButton : {
        flexDirection : 'row' , 
        marginHorizontal : 6, 
        paddingRight : 16,
        paddingLeft : 6,
    },
    text : {
        fontWeight : 'bold' , 
        fontSize : 20 , 
        paddingLeft : 6, 
        color : 'white'
    }
  });