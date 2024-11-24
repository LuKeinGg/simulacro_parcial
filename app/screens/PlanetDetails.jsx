import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, Pressable, ScrollView } from 'react-native';
import { updatePlanet, deletePlanet } from '../services/api';
import { planetDetailsStyles } from '../styles/PlanetDetailsStyles';

const PlanetDetails = ({ route, navigation }) => {
    const { planet } = route.params;
    const [isEditing, setIsEditing] = useState(false);
    const [editedPlanet, setEditedPlanet] = useState({ ...planet });
    const [errors, setErrors] = useState({});

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (field, value) => {
        setEditedPlanet({ ...editedPlanet, [field]: value });
    };

    const validateFields = () => {
        const newErrors = {};
        if (!editedPlanet.name.trim()) newErrors.name = 'El nombre es obligatorio';
        if (!editedPlanet.description.trim()) newErrors.description = 'La descripción es obligatoria';
        if (isNaN(editedPlanet.moons) || editedPlanet.moons < 0) newErrors.moons = 'Debe ser un número válido';
        return newErrors;
    };

    const handleSave = async () => {
        const validationErrors = validateFields();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await updatePlanet(planet.id, editedPlanet);
            Alert.alert('Éxito', 'Planeta actualizado correctamente');
            setIsEditing(false);
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'No se pudo actualizar el planeta');
        }
    };

    const handleDelete = async () => {
        Alert.alert('Confirmar eliminación', '¿Estás seguro?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Eliminar', onPress: async () => {
                    try {
                        await deletePlanet(planet.id);
                        Alert.alert('Éxito', 'Planeta eliminado');
                        navigation.goBack();
                    } catch (error) {
                        Alert.alert('Error', 'No se pudo eliminar el planeta');
                    }
                }
            },
        ]);
    };

    return (
        <ScrollView style={planetDetailsStyles.scrollContainer}>
            <View style={planetDetailsStyles.container}>
                <Image source={{ uri: editedPlanet.image }} style={planetDetailsStyles.image} />
                <Text style={planetDetailsStyles.title}>{editedPlanet.name}</Text>

                {isEditing ? (
                    <View>
                        <TextInput
                            style={planetDetailsStyles.input}
                            value={editedPlanet.name}
                            onChangeText={(value) => handleInputChange('name', value)}
                            placeholder="Nombre del planeta"
                        />
                        {errors.name && <Text style={planetDetailsStyles.errorText}>{errors.name}</Text>}

                        <TextInput
                            style={planetDetailsStyles.input}
                            value={editedPlanet.description}
                            onChangeText={(value) => handleInputChange('description', value)}
                            placeholder="Descripción"
                        />
                        {errors.description && <Text style={planetDetailsStyles.errorText}>{errors.description}</Text>}

                        <TextInput
                            style={planetDetailsStyles.input}
                            value={String(editedPlanet.moons)}
                            onChangeText={(value) => handleInputChange('moons', parseInt(value))}
                            placeholder="Cantidad de lunas"
                            keyboardType="numeric"
                        />
                        {errors.moons && <Text style={planetDetailsStyles.errorText}>{errors.moons}</Text>}

                        <TextInput
                            style={planetDetailsStyles.input}
                            value={editedPlanet.moon_names.join(', ')}
                            onChangeText={(value) =>
                                handleInputChange('moon_names', value.split(',').map(moon => moon.trim()))
                            }
                            placeholder="Nombres de lunas (separados por comas)"
                        />

                        <TextInput
                            style={planetDetailsStyles.input}
                            value={editedPlanet.image}
                            onChangeText={(value) => handleInputChange('image', value)}
                            placeholder="URL de la imagen"
                        />

                        <Pressable style={planetDetailsStyles.button} onPress={handleSave}>
                            <Text style={planetDetailsStyles.buttonText}>Guardar Cambios</Text>
                        </Pressable>
                    </View>
                ) : (
                    <View>
                        <Text style={planetDetailsStyles.description}>{editedPlanet.description}</Text>
                        <Text style={planetDetailsStyles.description}>Lunas: {editedPlanet.moons}</Text>
                        <Text style={planetDetailsStyles.description}>
                            Nombres de lunas: {editedPlanet.moon_names.join(', ')}
                        </Text>

                        <Pressable style={planetDetailsStyles.button} onPress={handleEditToggle}>
                            <Text style={planetDetailsStyles.buttonText}>Editar</Text>
                        </Pressable>
                    </View>
                )}

                <Pressable style={planetDetailsStyles.deleteButton} onPress={handleDelete}>
                    <Text style={planetDetailsStyles.buttonText}>Eliminar Planeta</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default PlanetDetails;
