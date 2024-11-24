import { StyleSheet } from 'react-native';
import { globalStyles } from './globalStyles';

export const planetListStyles = StyleSheet.create({
    ...globalStyles,
    buttonContainer: {
        ...globalStyles.buttonContainer,
        marginBottom: 25,
    },
    planetItem: {
        ...globalStyles.planetItem,
        marginBottom: 15,
    },

    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'green', // Fondo verde
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8, // Esquinas redondeadas
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF', // Texto en blanco
        fontSize: 16, // Tamaño de fuente
        fontWeight: 'bold', // Negrita
    },
});

export default planetListStyles;
