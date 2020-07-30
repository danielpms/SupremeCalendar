/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

const DetailsButton = ({ active, data }) => {
  return (
    <View style={styles.container}>
      <Icon
        color="dodgerblue"
        name={active ? 'chevron-down-outline' : data ? 'chevron-up-outline' : 'remove-outline'}
        type="ionicon"
        style={{ opacity: data ? 1 : 0.65 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    marginTop: 5,
    padding: 2,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
});

export default DetailsButton;
