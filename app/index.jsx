import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlanetList from './screens/PlanetList';
import PlanetDetails from './screens/PlanetDetails';
import AddPlanet from './screens/AddPlanet';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="PlanetList">
      <Stack.Screen
        name="PlanetList"
        component={PlanetList}
        options={{
          title: 'Planetas del sistema solar',
          headerStyle: {
            backgroundColor: '#1E90FF',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="PlanetDetails"
        component={PlanetDetails}
        options={{ title: 'Detalles del Planeta' }}
      />
      <Stack.Screen
        name="AddPlanet"
        component={AddPlanet}
        options={{ title: 'Agregar Planeta' }}
      />
    </Stack.Navigator>
  );
};

export default App;


