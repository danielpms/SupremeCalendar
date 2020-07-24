/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, View, Text, RefreshControl } from 'react-native';
import TaskCard from '../components/TaskCard';
import titleText from '../styles/titleText';

const TimelineLayout = () => {

  return (
    <ScrollView
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          tintColor="grey"
          onRefresh={() => true}
          refreshing={false}
        />
      }
    >
      <View style={{ justifyContent: 'space-between', flexDirection: 'column' }}>
        <Text style={titleText}>Today</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold', fontFamily: 'System', color: 'dimgrey', marginBottom: 20, marginHorizontal: 20}}>Wednesday 23th July</Text>
      </View>
      <TaskCard title="Date with my love" sHour="19:00h" eHour="20:00h" cColor="pink" />
      <TaskCard title="Meeting in Barcelona" sHour="09:00h" eHour="10:00h" cColor="olivedrab" />
      <TaskCard title="Play with my dog" sHour="14:00h" eHour="15:30h" cColor="aqua" />
      <TaskCard title="Do some sport" sHour="13:00h" eHour="13:05h" cColor="coral" />
      <TaskCard title="Cook a cake for my duck's birthday" sHour="19:00h" eHour="20:25h" cColor="cornflowerblue" />
      <TaskCard title="Create a new videogame" sHour="05:00h" eHour="07:00h" cColor="darkgreen" />
      <TaskCard title="Go to the doctor" sHour="17:00h" eHour="17:35h" cColor="darkturquoise" />
      <TaskCard title="Buy a new chair for the flat" sHour="08:00h" eHour="09:15h" cColor="darkviolet" />
      <TaskCard title="Walk with my dog next to the river" sHour="10:15h" eHour="11:00h" cColor="greenyellow" />
      <TaskCard title="Open Christmas' Gifts" sHour="07:00h" eHour="07:10h" cColor="khaki" />
      <TaskCard title="Paint the hole room's wall" sHour="15:00h" eHour="16:10h" cColor="orangered" />
      <TaskCard title="Clean all the screens" sHour="23:00h" eHour="00:00h" cColor="lightsteelblue" />
      <TaskCard title="Write text test titles" sHour="16:00h" eHour="21:05h" cColor="navy" />
      <View style={{ marginBottom: 10 }} />
    </ScrollView>
  );
};

export default TimelineLayout;
