import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Display(props){
  return(
    <View style={styles.display}>
      <Text 
        style={styles.textDisplayOperation}
        numberOfLines={1}
      >
        {props.value}
      </Text>
      <Text 
        style={styles.textDisplayResult}
        numberOfLines={1}
      >
        {props.result}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#444",
    width: "100%",
  },
  textDisplayResult: {
    fontSize: 50,
    color: "#fff"
  },
  textDisplayOperation: {
    fontSize: 25,
    color: "#fff"
  }
});