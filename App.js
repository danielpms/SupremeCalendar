import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TimelineScreen from './src/screens/TimelineScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TimelineScreen}
          options={{title: 'Timeline'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
