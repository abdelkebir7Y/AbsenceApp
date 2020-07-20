import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import { DrawerContent } from '../drawer/DrawerContent';

const Drawer = createDrawerNavigator();

export function DrawerStackNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeStack" drawerPosition='right' drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
}
