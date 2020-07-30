/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import titleText from '../styles/titleText';

const CreateEventLayout = () => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Text style={titleText}>New Event</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create();

export default CreateEventLayout;
