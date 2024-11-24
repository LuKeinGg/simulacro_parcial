import { StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export const planetDetailsStyles = StyleSheet.create({
    ...globalStyles,
    scrollContainer: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#34495E',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#ECF0F1',
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#BDC3C7',
    },
    errorText: {
        color: '#E74C3C',
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#3498DB',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    deleteButton: {
        backgroundColor: '#E74C3C',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
