import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Manter from './src/screens/Manter'
import Listar from './src/screens/Listar'



import DatabaseInit from './src/database/inicializacao';



function ManterScreen({ navigation }) {
  return (
    <Manter></Manter>
  );
}

function ListarScreen({ navigation }) {
  return (
    <Listar></Listar>
  );
}




const Drawer = createDrawerNavigator();

export default function App() {
  useEffect(() => {
    new DatabaseInit;
    console.log("Banco de Dados inicializado!");
    console.log("Sistema inicializado!");
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Manter">
      
        <Drawer.Screen name="Manter" component={ManterScreen} />
        
        <Drawer.Screen name="Listar" component={ListarScreen} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
