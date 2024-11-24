import { StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export const addPlanetStyles = StyleSheet.create({
    ...globalStyles,
    title: {
        ...globalStyles.title,
        color: '#FF5733',
    },
    input: {
        ...globalStyles.input,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },

    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
