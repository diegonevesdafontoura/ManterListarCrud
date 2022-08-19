import React, {useState, useEffect} from 'react';
import {  ActivityIndicator,  SafeAreaView,  Text,  View,  FlatList,  TextInput,  StatusBar,} from 'react-native';
import MeuEstilo from '../../meuestilo';
import  { Contato } from '../model/Contato'
import ContatoServico from '../service/contato_servico';

const ListarComFiltroContatos = () => {
  const [search, setSearch] = useState('');
  const [dadosFiltrados, setdadosFiltrados] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  
  useEffect(() => {

    findAllContatos();
    setdadosFiltrados(contatos);
   
  }, [contatos, dadosFiltrados]);


  const searchFilter = (text) => {
    if (text) {
      const newData = contatos.filter(
        function (item) {
          if (item.nome) {
            const itemData = item.nome.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
      });
      setdadosFiltrados(newData);
      setSearch(text);
    } else {
      setdadosFiltrados(contatos);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <Text
        style={MeuEstilo.item}
        onPress={() => getItem(item)}>
        {/* {item.id}
        {' - '} */}
        {item.nome.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    // alert('Id : ' + item.id + '\n\nTarefa : ' + item.nome + '\n\nCompletada: ' + item.completed);
    alert('Nome : ' + item.nome);
  };

  function findAllContatos (){
    ContatoServico.findAll().then((response: any) => {
        setContatos(response._array);
    }), (error: any) => {
        console.log(error);
    }
    return contatos;
  }
  

  // const findAllContatos = () => {
  //   ContatoServico.findAll().then((response: any) => {
  //       setContatos(response._array);
  //   }), (error: any) => {
  //       console.log(error);
  //   }
  //   return contatos;
  // }


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={MeuEstilo.containerlistarcomfiltro}>
        <TextInput
          style={MeuEstilo.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={dadosFiltrados}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};



export default ListarComFiltroContatos;
