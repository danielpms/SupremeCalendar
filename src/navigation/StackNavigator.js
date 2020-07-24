/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Timeline"
        component={DrawerNavigator}
        options={({route, navigation}) => ({
          title: '',
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerLeft: () => (
            <Icon
              color="black"
              name="menu"
              type="ionicon"
              style={{ marginLeft: 15 }}
              onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row-reverse' }}>
              <Icon
                color="black"
                name="add"
                type="ionicon"
                style={{ marginRight: 15 }}
                onPress={() => {}}
              />
              <Icon
                color="black"
                name="calendar-sharp"
                type="ionicon"
                style={{ marginRight: 15 }}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
