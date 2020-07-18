import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import { DrawerContent } from '../drawer/DrawerContent';
import {ProfileScreen} from '../screens/ProfileScreen';
import HelpScreen from '../screens/HelpScreen';

const Drawer = createDrawerNavigator();

export function MainStackNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack" drawerPosition='right' drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Aide" component={HelpScreen} />
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
}
