import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarCard = ({ title, color }) => {
  return (
    <View style={styles(color).container}>
      <Text style={styles().title}>{title}</Text>
    </View>
  );
};

const styles = (color) => StyleSheet.create(
  {
    container: {
      flex: 1,
      marginTop: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: color,
      borderRadius: 5,
    },
    title: {
      opacity: 0.6,
      fontSize: 15,
      fontWeight: '600',
      textAlign: 'right',
    },
  }
);

export default CalendarCard;