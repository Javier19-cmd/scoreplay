import React from "react"
import { View, StyleSheet } from "react-native"
import StyledText from "../components/StyledText"
import StyledInput from "../components/StyledInput"
import StyledButton from "../components/StyledButton"

const styles = StyleSheet.create({
  container: {
    margin: 60,
  },
  spacing: {
    margin: 20,
  }
})

const Register = () => {
  return (
    <View style={styles.container}>
      <StyledText h1 center>Registro</StyledText>
      <View style={styles.spacing}></View>
      <StyledInput 
        placeholder={"Correo"}
        simple
        keyboardType={"email-address"}
      />
      <StyledInput 
        placeholder={"Nombre"}
        simple
      />
      <StyledInput 
        placeholder={"Apellido"}
        simple
      />
      <StyledInput 
        placeholder={"Teléfono"}
        simple
        keyboardType={"phone-pad"}
      />
      <StyledInput 
        placeholder={"Contraseña"}
        simple
      />
      <View style={styles.spacing}></View>
      <StyledButton text={"Registrarse"} />
    </View>
  )
}

export default Register
