/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TaskCard from '../components/TaskCard';
import titleText from '../styles/titleText';

const HomeLayout = () => {
  return (
      <ScrollView style={{ flex: 1 }}>
          <Text style={titleText}>Today</Text>
          <TaskCard title="Date with my love" />
          <TaskCard title="Meeting in Barcelona" />
          <TaskCard title="Play with my dog" />
          <TaskCard title="Do some sport" />
          <TaskCard title="Cook a cake for my duck's birthday" />
          <TaskCard title="Create a new videogame" />
          <TaskCard title="Go to the doctor" />
          <TaskCard title="Buy a new chair for the flat" />
          <TaskCard title="Walk with my dog next to the river" />
          <TaskCard title="Open Christmas' Gifts" />
          <TaskCard title="Paint the hole room's wall" />
          <TaskCard title="Clean all the screens" />
          <TaskCard title="Write text test titles" />
          <View style={{ marginBottom: 30 }} />
      </ScrollView>
  );
};

export default HomeLayout;