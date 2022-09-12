import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [num1 , setNum1] = useState('');
    const [num2 , setNum2] = useState('');
    const [result , setResult] = useState('');



    function tong() {
        let a = parseFloat(num1) + parseFloat(num2);
        setResult('Kết quả: ' + a + ' ( Tổng ) ');
    }
    function hieu() {
        let a = parseFloat(num1) - parseFloat(num2);
        setResult('Kết quả: ' + a + ' ( Hiệu ) ');
    }
    function tich() {
        let a = parseFloat(num1) * parseFloat(num2);
        setResult('Kết quả: ' + a + ' ( Tích ) ');
    }
    function thuong() {
        if (parseFloat(num2) == 0) {
            setResult('Kết quả: NaN ');
        }
        else {
            let a = parseFloat(num1) / parseFloat(num2);
            setResult('Kết quả: ' + a + ' ( Thương ) ');
        }
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.txtTitle}>Calculator</Text>
            <TextInput keyboardType='numeric' placeholder='nhập a' style={styles.input} onChangeText={num1=> setNum1(num1) } />
            <TextInput keyboardType='numeric' placeholder='nhập b' style={styles.input} onChangeText={num2=> setNum2(num2) } />

    
            <View style={styles.container_btn}>
                <Button title=' + ' color="green" onPress={tong}/>
                <Button title=' - ' color="red"  onPress={hieu} />
                <Button title=' x ' color="pink"  onPress={tich} />
                <Button title=' / ' color="yellow" onPress={thuong} />
            </View>
            <View style={styles.container_KQ}>
                <Text style={styles.txtKQ}>{result}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  container_btn: {
    width: "100%",
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container_KQ: {
    marginTop: 20
  },
  txtKQ: {
    color: 'red',
    fontSize: 20,
  }
});
