import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';
import Display from './components/Display';
import Button from './components/Button';

let states = {
  displayValue: '',
  result: 0,
  operated: false,
  dot: false,
};

export default function App() {
  const [valueDisplay, setvalueDisplay] = useState(states.displayValue);
  const [valueResult, setvalueResult] = useState(states.result);

  const addDigit  = (digit) => { 
    if(digit === '+' || digit ===  '-' || digit ===  '*' || digit ===  '/') {
      states.dot = false;
    }
    if(digit === '.' && !states.dot) {
      states.dot = true;
      states.operated = false;
      console.log("Tbm não");
    } else if(digit === '.' && states.dot){
        return ;
    }
    if((digit === '+' || digit ===  '-' ||digit ===  '*' || digit ===  '/') && states.operated) {
      states.displayValue = states.result;
      states.result = 0;
    }

    states.displayValue += digit; 
    setvalueDisplay(states.displayValue);
    setvalueResult(states.result);
    states.operated = false;
  };

  const cleanDisplayOnClick = () => {
    states = {
      displayValue: '',
      result: 0,
      operated: false,
      dot: false,
    };
    setvalueDisplay(states.displayValue);
    setvalueResult(states.result);
  };

  const operatedOnClick = (digit) => {
    if(digit === 'AC') {
      cleanDisplayOnClick();
      return ;
    }
    try{
      states.result = eval(valueDisplay);
      states.operated = true;
      setvalueResult(states.result);

    }catch{
      states.result = "Error";
    };
  };

  return (
    <View style={styles.container}>
      <Display value={valueDisplay} result={valueResult}/>
     <View 
       style={styles.buttonsContainer}>
       <Button label="AC" triplo ac onClick={() => {operatedOnClick('AC')}}></Button>
       <Button label="/"  operacao onClick={() => { addDigit('/') }}></Button>
       <Button label="7" onClick={() => {addDigit('7')}}></Button>
       <Button label="8" onClick={() => {addDigit('8')}}></Button>
       <Button label="9" onClick={() => {addDigit('9')}}></Button>
       <Button label="*" operacao onClick={() => {addDigit('*')}}></Button>
       <Button label="4" onClick={() => {addDigit('4')}}></Button>
       <Button label="5" onClick={() => {addDigit('5')}}></Button>
       <Button label="6" onClick={() => {addDigit('6')}}></Button>
       <Button label="-" operacao onClick={() => {addDigit('-')}}></Button>
       <Button label="1" onClick={() => {addDigit('1')}}></Button>
       <Button label="2" onClick={() => {addDigit('2')}}></Button>
       <Button label="3" onClick={() => {addDigit('3')}}></Button>
       <Button label="+" operacao onClick={() => {addDigit('+')}}></Button>
       <Button label="0" duplo onClick={() => {addDigit('0')}}></Button>
       <Button label="." onClick={() => {addDigit('.')}}></Button>
       <Button label="=" igual onClick={() => {operatedOnClick('=')}}></Button>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
});
