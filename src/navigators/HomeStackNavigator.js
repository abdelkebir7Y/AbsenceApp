import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons'; 
import { ScheduleNavigator } from './ScheduleNavigator'; 
import { JustificationNavigator } from './JustificationNavigator';
import { AbsenceNavigator } from './AbsenceNavigator';
import { QrCodeNavigator } from './QrCodeNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function HomeStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f8f9fa"
    >
      <Tab.Screen
        name="QrCode"
        component={QrCodeNavigator}
        options={{
          tabBarLabel: 'Scanner',
          tabBarColor: '#007bff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={24}/>
          ),
        }}
      />
      
      <Tab.Screen
        name="Home"
        component={ScheduleNavigator}
        options={{
          tabBarLabel: 'Accueils',
          tabBarColor: '#007bff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Absence"
        component={AbsenceNavigator}
        options={{
          tabBarLabel: 'Absences',
          tabBarColor: '#007bff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event-busy" color={color} size={24} /> 
          ),
        }}
      />

      <Tab.Screen
        name="Justification"
        component={JustificationNavigator}
        options={{
          tabBarLabel: 'Justifications',
          tabBarColor: '#007bff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-document-box-multiple-outline" color={color} size={24} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}