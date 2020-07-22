import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const DetailsButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    padding: 8,
    backgroundColor: 'ghostwhite',
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    color: 'dodgerblue',
  },
});

export default DetailsButton;
