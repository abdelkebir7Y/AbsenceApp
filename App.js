import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { MainStackNavigator } from './src/navigators/MainStackNavigator';
import {lightTheme} from './src/themes/Light'
import { AuthContext } from './src/contexts/AuthContext';
import { UseAuth } from './src/hooks/Reducer';
import { UserContext } from './src/contexts/UserContext';
import {ErrorContext} from './src/contexts/ErrorContext'
import { SplashScreen } from './src/screens/SplashScreen';

const RouteStack = createStackNavigator();

export default function () {
  
  const {auth,state} = UseAuth();
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RouteStack.Navigator screenOptions={{
          headerShown : false,
        }}>
        { ( state.loading) ? 
               <RouteStack.Screen name="Splash" component={SplashScreen} />
            :
               (
                state.user ? (
                    <RouteStack.Screen name="MainStack">
                        {() => (
                          
                            <UserContext.Provider value={{user :state.user , emploi : state.emploi }} >
                              <MainStackNavigator/>
                            </UserContext.Provider>
                          
                        ) }
                  </RouteStack.Screen>
                ) : ( 
                  <RouteStack.Screen name="AuthStack">
                  {() => (
                                    
                      <ErrorContext.Provider value={state.error} >
                        <AuthStackNavigator />
                      </ErrorContext.Provider>
                    
                  ) }
                  </RouteStack.Screen>
                )
              )
        }
        </RouteStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}
