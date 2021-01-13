import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

export default function App() {
  const [altura,setAltura] = useState('');
  const [peso,setPeso] = useState('');
  const [imcText,setImcText] = useState('');
  const [classText,setClassText] = useState('');
  
  function imc(){
    //verifica se os campos estao preenchido
    if (altura !='' && peso !=''){
      //calculo imc
      const alt = altura / 100;
      const result = peso / (alt * alt);

      setImcText(`Seu IMC é: ${result.toFixed(2)}`);
      // limpa os inputs
      setPeso('');
      setAltura('');
      // define a classe da obesidade
      if(result < 18.5){
        setClassText('Magreza');
      }
      else if(result >= 18.5 && result < 25){
        setClassText('Normal');
      }
      else if(result >= 25 && result < 30){
        setClassText('Sobrepeso');
      }
      else if(result >= 30 && result < 40){
        setClassText('Obesidade');
      }
      else {
        setClassText('Obesidade Grave');
      }

      alert('IMC calculado!!');

    }
    else{
      alert('Preencha os dados corretamente');
    }
  }
  return (

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora IMC</Text>
        
        <TextInput style={styles.input}
        placeholder={'Altura (cm)'}
        keyboardType='numeric'
        onChangeText={ (altura) => setAltura(altura)}
        value={altura}
        />
        
        <TextInput style={styles.input}
        placeholder={'Peso (kg)'}
        keyboardType='numeric'
        onChangeText={ (peso) => setPeso(peso)}
        value={peso}
        />
      
        <TouchableOpacity style={styles.button} onPress={()=>{imc()}}>
          <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>
        <View style={styles.result}>
          <Text style={styles.imc}>{imcText}</Text>
          <Text style={styles.class}>{classText}</Text>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 30,
    padding: 0,
  },
  title:{
    fontSize: 30,
    marginBottom: 20,
  },
  
  input: {
    width: 300,
    padding: 20,
    backgroundColor: '#eee',
    margin: 15,
    borderRadius: 5,
    elevation: 3,
    fontSize: 20
  },
  
  button: {
    margin: 30,
    padding: 10,
    alignItems: 'center',
    backgroundColor: "#00ee00",
    width: 300,
    borderRadius: 40,
    elevation: 3,
  },
  text: {
    fontSize: 20
  },
  result: {
    alignItems: 'center',
    padding: 15,
  },

  class: {
    fontSize:35,

  },
  imc: {
    fontSize: 25,
    color: "#555"
  }
});
