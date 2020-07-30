import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const now = new Date();

const CalendarMonthScreen = () => {

  return (
    <View>
      <FlatList
        data={now}
        renderItem = {(item) => item}
      />
    </View>
  );
};

/* const getWeekDay = (weekDay, date) => {
  let days = [];
  const monthDate = new Date(date.getFullYear(), date.getMonth(), 1);

  console.log(monthDate);

  while (monthDate.getMonth() === date.getMonth()) {
    if (weekDay === getMonthDay(monthDate)) {
      days.push(monthDate.getDay());
      monthDate.setDate(monthDate.getDate() + 1);
    }
  }

  return days;
};

const getMonthDay = (date) => {
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  return months[ date.getMonth() ];
};

const buildMonthCalendar = () => {
  let monthCalendar = {
    month: getMonthDay(now),
    weekDays: {
      monday: getWeekDay('Monday', now),
    },
  };

  console.log(monthCalendar);
  return monthCalendar;
}; */

const styles = StyleSheet.create();

export default CalendarMonthScreen;
