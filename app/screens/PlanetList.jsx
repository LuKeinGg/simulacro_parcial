import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchPlanets } from '../services/api';
import { planetListStyles } from '../styles/PlanetListStyles';

const PlanetList = () => {
    const [planets, setPlanets] = useState([]);
    const navigation = useNavigation();

    const loadPlanets = async () => {
        try {
            const data = await fetchPlanets();
            setPlanets(data);
        } catch (error) {
            console.error('Error fetching planets:', error);
        }
    };

    useEffect(() => {
        loadPlanets();
    }, []);

    return (
        <View style={planetListStyles.container}>
            <View style={planetListStyles.buttonContainer}>
                <Pressable
                    style={planetListStyles.button}
                    onPress={() => navigation.navigate('AddPlanet')}
                >
                    <Text style={planetListStyles.buttonText}>Agregar Planeta</Text>
                </Pressable>

                <Pressable
                    style={planetListStyles.button}
                    onPress={loadPlanets}
                >
                    <Text style={planetListStyles.buttonText}>Refrescar</Text>
                </Pressable>
            </View>
            <FlatList
                data={planets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable
                        style={planetListStyles.planetItem}
                        onPress={() => navigation.navigate('PlanetDetails', { planet: item })}
                    >
                        <Image source={{ uri: item.image }} style={planetListStyles.image} />
                        <Text style={planetListStyles.planetName}>
                            {item.name}
                        </Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default PlanetList;
