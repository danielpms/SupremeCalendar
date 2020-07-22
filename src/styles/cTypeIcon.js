import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 10,
        width: 25,
        borderRadius: 10,
        backgroundColor: 'teal',
        marginTop: 3,
        marginLeft: 5,
    },
});

export default StyleSheet.compose(styles.container);
