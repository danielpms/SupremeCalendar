import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    defaultCard: {
      flex: 1,
      marginBottom: 20,
      marginHorizontal: 15,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: 'black',
      shadowOffset: {
      width: 0,
      height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 7,
      opacity: 1,
    },
  }
);

export default StyleSheet.compose(styles.defaultCard);
