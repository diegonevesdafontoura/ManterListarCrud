import React ,{useState, useEffect} from 'react'
import {ActivityIndicator, SafeAreaView, View, FlatList,  Text, StatusBar } from 'react-native';

import MeuEstilo from '../../meuestilo';
import  { Contato } from '../model/Contato'
import ContatoServico from '../service/contato_servico';

const Listar = () => {
  const [contatos, setContatos] = useState([]); // Initial empty array of users

  useEffect(() => {
   // const contatos=[];
    findAllContatos();
  }, [contatos]);


const Item = ({ nome }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>{nome}</Text>
  </View>
);

 
const findAllContatos = () => {
  ContatoServico.findAll().then((response: any) => {
      setContatos(response._array);
  }), (error: any) => {
      console.log(error);
  }
  return contatos;
}

  const renderItem = ({ item }) => <Item nome={item.nome} />;


  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList 
      data={contatos} 
      renderItem={renderItem} 
      keyExtractor={item => item.id} 
      // refreshing={true}
      // onRefresh={() => {
      //   getGatos();
      // }}
      />
    </SafeAreaView>
  );
};


export default Listar;
