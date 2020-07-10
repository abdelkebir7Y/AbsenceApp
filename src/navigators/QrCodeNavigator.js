import { QrCodeScreen } from '../screens/QrCodeScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign} from '@expo/vector-icons'; 

const QrCodeStack = createStackNavigator();

export function QrCodeNavigator({navigation}) {
  return (
    <QrCodeStack.Navigator screenOptions={{
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
      }} >
        <QrCodeStack.Screen name="QrCode" component={QrCodeScreen} options={{
            title:'AbsenceAppp',
            headerRight : () => (
              <AntDesign name="menufold" size={28} color="#fff" onPress={
                ()=> {
                  navigation.openDrawer();
                }
              } />
            )
            }}/>
    </QrCodeStack.Navigator>
  );
}