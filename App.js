import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from "./ProyectData/Views/index"
import DetailsScreen from "./ProyectData/Views/Details";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1168AD'},
            headerTintColor: '#fff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}>

        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'Lista Productos' }}/>

        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ title: 'Detalles'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;