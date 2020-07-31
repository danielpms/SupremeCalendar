/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import CustomDrawerContent from '../components/CustomDrawer';
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
    backgroundColor: 'white',
  },
});

export default () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
