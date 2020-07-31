/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import CalendarCard from './CalendarCard';

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Calendars</Text>
        <CalendarCard title="Meeting" color="pink" />
        <CalendarCard title="Festivity" color="skyblue" />
      </View>
      <DrawerItem
        label="Help"
        icon={() => <Icon name="help-buoy-outline" type="ionicon" /> }
        onPress={() => {}}
      />
      <Text style={{ marginTop: 10, marginLeft: 15 }}>Drawer Version 0.1 Test</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default CustomDrawerContent;
