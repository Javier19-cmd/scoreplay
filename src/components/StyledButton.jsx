import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import StyledText from "./StyledText"

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#11CCBB',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  }
})

export default function StyledButton({text, onPress}){
  const buttonStyles = [
    styles.button,
  ]

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} >
      <StyledText h2 secondary>{text}</StyledText>
    </TouchableOpacity>
  )
}