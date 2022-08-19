import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Escrever from './src/screens/Escrever'
import Listar from './src/screens/Listar'
import ListarComFiltro from './src/screens/ListarComFiltro'
import ListarComFiltroContatos from './src/screens/ListarComFiltroContatos'

import DatabaseInit from './src/database/inicializacao';





function EscreverScreen({ navigation }) {
  return (
    <Escrever></Escrever>
  );
}


function ListarScreen({ navigation }) {
  return (
    <Listar></Listar>
  );
}


function ListaComFiltroScreen({ navigation }) {
  return (
    <ListarComFiltro></ListarComFiltro>
  );
}

function ListarComFiltroContatosScreen({ navigation }) {
  return (
    <ListarComFiltroContatos></ListarComFiltroContatos>
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
      <Drawer.Navigator initialRouteName="Home">
        {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        <Drawer.Screen name="Escrever" component={EscreverScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
        <Drawer.Screen name="Lista Com Filtro Contatos" component={ListarComFiltroContatosScreen} />
        <Drawer.Screen name="Lista Com Filtro" component={ListaComFiltroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
