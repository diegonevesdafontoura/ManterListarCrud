import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView
} from 'react-native';
import MeuEstilo from '../../meuestilo'
import  { Contato } from '../model/Contato'
import ContatoServico from '../service/contato_servico';

const Escrever = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [natural, setNatural] = useState('')
  

  const enviarDados = () => {
    let contato = new Contato();
    contato.nome = nome; //seta o atributo nome do objeto 
    contato.email = email; //seta o atributo email do objeto 
    contato.natural = natural; //set
    if (ContatoServico.addData(contato)) {
      alert("Novo contato inserido!");
      console.log("Novo contato inserido!");
  } else {
      alert("Não foi possível inserir o novo contato...");
      console.log("Não foi possível inserir o novo contato...");
  }

  return contato;
  }

  const limparFormulario = () => {
  
  }

  return (
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Natural"
          value={natural}
          onChangeText={text => setNatural(text)}
          style={MeuEstilo.input}
        />
       
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity
          onPress={enviarDados}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever

