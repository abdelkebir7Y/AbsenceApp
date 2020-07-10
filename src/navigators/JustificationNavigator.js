import { JustificationScreen } from '../screens/JustificationScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign} from '@expo/vector-icons'; 

const JustificationStack = createStackNavigator();

export function JustificationNavigator({navigation}) {
    return (
      <JustificationStack.Navigator screenOptions={{
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
          <JustificationStack.Screen name="Justification" component={JustificationScreen} options={{
            title:'AbsenceAppp',
            headerRight : () => (
              <AntDesign name="menufold" size={28} color="#fff" onPress={
                ()=> {
                  navigation.openDrawer();
                }
              } />
            )
            }} />
      </JustificationStack.Navigator>
    );
  }