/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TimelineScreen from '../screens/TimelineScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Timeline" drawerStyle={{ backgroundColor: 'ghostwhite'}}>
      <Drawer.Screen
        name="Timeline"
        component={TimelineScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
