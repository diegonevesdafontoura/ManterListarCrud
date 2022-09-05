import React, { useState, useRef } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView, Alert
} from 'react-native';
import MeuEstilo from '../../meuestilo'
import  { Contato } from '../model/Contato'
import ContatoServico from '../service/contato_servico';

const Manter = () => {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [natural, setNatural] = useState('')
  

  const adicionarRegistro = () => {
    let contato = new Contato();
    contato.nome = nome; //seta o atributo nome do objeto 
    contato.email = email; //seta o atributo email do objeto 
    contato.natural = natural; //set o atributo natural do objeto
    if (ContatoServico.addData(contato)) {
      alert("Registro Inserido com Sucesso!");
      console.log("Registro Inserido com Sucesso!");
      limparFormulario();

  } else {
      alert("Não foi possível inserir o registro...");
      console.log("Não foi possível inserir o registro...");
  }
  return contato;
  
  }

  const localizarRegistro = (id) => {
         ContatoServico.findById(parseInt(id))
        .then((response: any) => {
            if (response._array.length > 0 && response != null && response != undefined) {
                let contato: Contato = new Contato()// cria objeto memória
                const contatoretorno = response._array.map((item, key) => {
                    contato.id = item.id;
                    contato.nome = item.nome;
                    contato.email = item.email;
                    contato.natural = item.natural;
                })
                setNome(contato.nome);
                setEmail(contato.email);
                setNatural(contato.natural);
       
            }else {
                alert("Id não localizado")
                limparFormulario();
                }
            }), (error) => {
    console.log(error);
}
}
 

  const atualizarRegistro = () => {
    let contato = new Contato()// cria objeto memória
        contato.id = parseInt(id) // seta o atributo id do objeto // Mas não altera 
                                // no banco é auto incremento
        contato.nome = nome // seta o atributo nome do objeto 
        contato.email = email // seta o atributo email do objeto 
        contato.natural = natural // seta o atributo natural do objeto 
        
        ContatoServico.updateByObjeto(contato).
        then((response: any) => {
            if (response._array.length >= 0 && response != null && response != undefined) {
                // popular o objeto da memória
                alert("Alterado com Sucesso");
                console.log("alterado com Sucesso");
                limparFormulario();
            } else {
                alert("Registro não encontrado")
            }
        }), (error) => {
            console.log(error);
        }
  }

  const excluirRegistro = () => {
    //  Adicionar Tratamentos
    ContatoServico.deleteById(parseInt(id))
      alert("contato excluido com sucesso: ")
  }

  const limparFormulario = () => {
    setId("");
    setNome("");
    setEmail("");
    setNatural("");
  }

  return (
    
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
      <View style={MeuEstilo.inputContainer}>
      <TextInput
          placeholder="Digite o Id para Localizar"
          value={id}
          onChangeText={id => setId(id)}
          style={MeuEstilo.input}
          keyboardType='numeric'
        />

        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={nome => setNome(nome)}
          style={MeuEstilo.input}
        //   ref={NameRef} // Referncia Inicial para Digitação com Ref
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Natural"
        //   returnKeyType="next"
        //   onSubmitEditing={() => {NameRef.current.focus(); }} blurOnSubmit={false}
          value={natural}
          onChangeText={natural => setNatural(natural)}
          style={MeuEstilo.input}
        
        />
       
      </View>

      <View style={MeuEstilo.buttonContainer}>
        <TouchableOpacity
          onPress={adicionarRegistro}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Adicionar Registro</Text>
        </TouchableOpacity>

       <TouchableOpacity
          // exemplo passando parametro para o componente 
          onPress={() => {localizarRegistro(parseInt(id))}}
          //onPress={localizarRegistro}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Localizar Registro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={atualizarRegistro}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Atualizar Registro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={excluirRegistro}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Excluir Registro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limparFormulario}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Limpar Formulário</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Manter

