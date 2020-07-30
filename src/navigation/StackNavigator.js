/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { NavigationContainer, DrawerActions, CommonActions, StackActions } from '@react-navigation/native';
import TimelineScreen from '../screens/TimelineScreen';
import CalendarMonthScreen from '../screens/CalendarMonthScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen
        name="Timeline"
        component={TimelineScreen}
      />
      <Stack.Screen
        name="Calendar"
        component={CalendarMonthScreen}
      />
      <Stack.Screen
        name="Create Event"
        component={CreateEventScreen}
      />
    </Stack.Navigator>
  );
};

const stackScreenOptions = ({route, navigation}) => ({
  gestureEnabled: false,
  title: '',
  headerStyle: {
    shadowColor: 'transparent',
  },
  headerLeft: () => (
    <Icon
      color="rgb(28, 28, 30)"
      name="menu"
      type="ionicon"
      style={{ marginLeft: 15, backgroundColor: '#f3f3f3', borderRadius: 5 }}
      onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer());}}
    />
  ),
  headerRight: () => (
    <View style={{ flexDirection: 'row-reverse' }}>
      <Icon
        color={route.name === 'Create Event' ? 'rgb(35, 188, 78)' : 'black'}
        name="add"
        type="ionicon"
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate('Create Event')}
      />
      <Icon
        color={route.name === 'Calendar' ? 'rgb(255, 69, 58)' : 'black'}
        name="calendar-sharp"
        type="ionicon"
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate('Calendar')}
      />
      <Icon
        color={route.name === 'Timeline' ? 'rgb(10, 132, 255)' : 'black'}
        name="albums-outline"
        type="ionicon"
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate('Timeline')}
      />
    </View>
  ),
});

export default StackNavigator;

