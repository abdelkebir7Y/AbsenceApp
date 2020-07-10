import { AbsenceScreen } from '../screens/AbsenceScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign} from '@expo/vector-icons'; 

const AbsenceStack = createStackNavigator();

export function AbsenceNavigator({navigation}) {
    return (
      <AbsenceStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor : '#007bff'
        },
        headerTintColor : '#fff',
        headerTitleStyle: {
          fontWeight : 'bold',
        },
        headerRightContainerStyle : {
          paddingRight : 16, 
        }
      }}>
          <AbsenceStack.Screen name="Absence" component={AbsenceScreen} options={{
            title:'AbsenceAppp',
            headerRight : () => (
              <AntDesign name="menufold" size={28} color="#fff" onPress={
                ()=> {
                  navigation.openDrawer();
                }
              } />
            )
            }}/>
      </AbsenceStack.Navigator>
    );
  }