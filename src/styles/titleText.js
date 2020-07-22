import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        title:
        {
            fontFamily: 'System',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 15,
            marginHorizontal: 15,
        },
    }
);

export default StyleSheet.compose(styles.title);
