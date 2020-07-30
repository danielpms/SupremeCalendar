/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 65, marginBottom: 5, marginLeft: 15 }}>Calendars</Text>
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
});

export default CustomDrawerContent;
