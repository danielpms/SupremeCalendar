/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailsButton from './DetailsButton';
import defaultCard from '../styles/defaultCard';
import cTypeIcon from '../styles/cTypeIcon';

const TaskCard = ({ title, sHour, eHour, cColor }) => {
  return (
    <View style={defaultCard}>
      <View style={styles.topContainer}>
        <Text style={styles.dateText}>{sHour} - {eHour}</Text>
        <View style={cTypeIcon(cColor).container} />
      </View>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <View style={{ marginTop: 3 }}>
          <TouchableOpacity>
            <DetailsButton />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 13,
    color: 'grey',
    fontWeight: 'bold',
  },
  titleText: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TaskCard;
