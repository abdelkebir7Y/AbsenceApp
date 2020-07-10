import { ScheduleScreen } from '../screens/ScheduleScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign} from '@expo/vector-icons'; 


const HomeStack = createStackNavigator();

export function ScheduleNavigator({navigation}) {
    return (
      <HomeStack.Navigator screenOptions={{
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
          <HomeStack.Screen name="Schedule" component={ScheduleScreen} options={{
            title:'AbsenceAppp',
            headerRight : () => (
              <AntDesign name="menufold" size={28} color="#fff" onPress={
                ()=> {
                  navigation.openDrawer();
                }
              } />
            )
            }} />
      </HomeStack.Navigator>
    );
  }