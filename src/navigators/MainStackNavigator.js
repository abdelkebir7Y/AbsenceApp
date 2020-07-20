import React from 'react';
import {DrawerStackNavigator} from './DrawerStackNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import {HelpNavigator} from './HelpNavigator';
import { ProfileNavigator } from './ProfileNavigator';


const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator 
      mode = {'modal'}
      initialRouteName="DrawerStack" 
      screenOptions={{
        headerShown : false,
      }}>
      <MainStack.Screen name="DrawerStack" component={DrawerStackNavigator} />
      <MainStack.Screen name="Profile" component={ProfileNavigator} />
      <MainStack.Screen name="Help" component={HelpNavigator} />
    </MainStack.Navigator>
  );
}
