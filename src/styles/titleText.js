import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        title:
        {
            fontFamily: 'System',
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 20,
            marginHorizontal: 15,
        },
    }
);

export default StyleSheet.compose(styles.title);
