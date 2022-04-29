import React from "react";
import { TouchableHighlight, Dimensions, StyleSheet, Text } from "react-native";


export default function Button(props){
  const buttonsStyles = [styles.button];

  if(props.duplo){
    buttonsStyles.push(styles.buttonDuplo);
  }
  if(props.triplo){
    buttonsStyles.push(styles.buttonTriplo);
  }
  if(props.igual){
    buttonsStyles.push(styles.buttonEqual);
  }
  if(props.operacao){
    buttonsStyles.push(styles.buttonOperantion);
  }
  if(props.ac){
    buttonsStyles.push(styles.buttonClear);
  }
  if(props.bs){
    buttonsStyles.push(styles.buttonBackSpace);
  }
  return(
    <TouchableHighlight
      onPress={props.onClick}
    >
       <Text style={buttonsStyles}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    height: Dimensions.get(`window`).width/4,
    width: Dimensions.get(`window`).width/4,
    padding: 20,
    backgroundColor: "#d1d1d1",
    color: "#000",
    borderWidth: 0.5,
    borderColor: "#777",
    textAlign: "center"
  },
  buttonOperantion: {
    color: "#fff",
    backgroundColor: "#eb7e1e"
  },
  buttonEqual: {
    color: "#fff",
    backgroundColor: "#eb7e1e"
  },
  buttonClear: {
    color: "#000",
  },
  buttonBackSpace: {
    color: "#0ff",
  },
  buttonDuplo: {
    width: (Dimensions.get(`window`).width/4)*2,
  },
  buttonTriplo: {
    width: (Dimensions.get(`window`).width/4)*3,
  },
});