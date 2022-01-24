import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator, AboutStackNavigator} from './stackNavigation';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={MainStackNavigator}></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={AboutStackNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
