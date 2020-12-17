import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [altura,setAltura] = useState('');
  const [peso,setPeso] = useState('');
  function imc(){
    const alt = altura / 100;
    const result = peso / (alt * alt);

    alert(`imc = ${result.toFixed(2)}`)
  }
  return (
    <View style={styles.container}>
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

      <StatusBar style="auto" />
    </View>
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
  text:{
    fontSize: 20
  }

});
