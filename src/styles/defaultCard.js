import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
    defaultCard:
    {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 15,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: 'black',
      shadowOffset: {
      width: 0,
      height: 1,
      },
      shadowOpacity: 0.4,
      shadowRadius: 7,
    },
  }
);

export default StyleSheet.compose(styles.defaultCard);
