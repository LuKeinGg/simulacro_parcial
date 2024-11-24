import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { addPlanet } from '../services/api';
import { addPlanetStyles } from '../styles/AddPlanetStyles';
import { Pressable } from 'react-native';



const AddPlanet = ({ navigation }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [moons, setMoons] = useState('');
    const [moonNames, setMoonNames] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAddPlanet = async () => {
        if (!name || !description || !moons) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        const planetImage = imageUrl || 'https://via.placeholder.com/150';

        const newPlanet = {
            name,
            description,
            moons: parseInt(moons),
            moon_names: moonNames.split(',').map((moon) => moon.trim()),
            image: planetImage,
        };

        try {
            await addPlanet(newPlanet);
            Alert.alert('Éxito', 'Planeta agregado exitosamente.');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'No se pudo agregar el planeta.');
        }
    };

    return (
        <View style={addPlanetStyles.container}>
            <Text style={addPlanetStyles.title}>Agregar Nuevo Planeta</Text>
            <TextInput style={addPlanetStyles.input} placeholder="Nombre del Planeta" value={name} onChangeText={setName} />
            <TextInput style={addPlanetStyles.input} placeholder="Descripción del Planeta" value={description} onChangeText={setDescription} />
            <TextInput style={addPlanetStyles.input} placeholder="Cantidad de Lunas" value={moons} keyboardType="numeric" onChangeText={setMoons} />
            <TextInput style={addPlanetStyles.input} placeholder="Nombres de las Lunas" value={moonNames} onChangeText={setMoonNames} />
            <TextInput style={addPlanetStyles.input} placeholder="URL de la Imagen (opcional)" value={imageUrl} onChangeText={setImageUrl} />
            <Pressable
                style={addPlanetStyles.button}
                onPress={handleAddPlanet}
            >
                <Text style={addPlanetStyles.buttonText}>Agregar Planeta</Text>
            </Pressable>
        </View>
    );
};

export default AddPlanet;
