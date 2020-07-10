import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { MainStackNavigator } from './navigators/MainStackNavigator';
import {lightTheme} from './themes/Light'
import { AuthContext } from './contexts/AuthContext';
import { UseAuth } from './hooks/UseAuth';
import { UserContext } from './contexts/UserContext';

const RouteStack = createStackNavigator();

export default function () {
  
  const {auth,state} = UseAuth();

  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RouteStack.Navigator screenOptions={{
          headerShown : false,
        }}>
        { state.user ? (
            <RouteStack.Screen name="MainStack">
                {() => (
                  
                    <UserContext.Provider value={state.user} >
                      <MainStackNavigator/>
                    </UserContext.Provider>
                  
                 ) }
          </RouteStack.Screen>
        ) : ( 
          <RouteStack.Screen name="AuthStack" component={AuthStackNavigator} />)
        }
        </RouteStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}
