import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

const DetailsButton = () => {
  return (
    <View style={styles.container}>
      <Icon
        color="dodgerblue"
        name="chevron-down-outline"
        type="ionicon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    marginTop: 2,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default DetailsButton;
