/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import TimelineScreen from '../screens/TimelineScreen';
import { StyleSheet } from 'react-native';
import CustomDrawerContent from '../components/CustomDrawer';
import { Icon } from 'react-native-elements';
import CalendarMonthScreen from '../screens/CalendarMonthScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Timeline"
      drawerStyle={styles.container}
      overlayColor="rgba(0, 0, 0, 0.2)"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: 'white',
      }}
    >
      <Drawer.Screen
        name="Stack"
        component={StackNavigator}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderTopWidth: 2,
    borderTopColor: 'rgba(240, 240, 240, 1)',
  },
});

export default () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
