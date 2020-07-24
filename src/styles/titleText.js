import { StyleSheet } from 'react-native';

const styles = StyleSheet.create(
    {
        title:
        {
            fontFamily: 'System',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 5,
            marginHorizontal: 15,
        },
    }
);

export default StyleSheet.compose(styles.title);
