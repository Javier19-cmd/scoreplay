import React from "react"
import { TextInput, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
    color: 'black',
    margin: 10,
    borderColor: "#727272"
  },
  simple: {
    borderBottomWidth: 1,
  }
})

export default function StyledInput({placeholder, onChangeText, value, simple, keyboardType}){
  const inputStyles = [
    styles.input,
    simple && styles.simple,
  ]

  return (
    <TextInput
      style={inputStyles}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  )
}