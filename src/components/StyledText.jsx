import React from "react"
import { Text, StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#727272',
    margin: 10,
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 18,
  },
  h4: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
  },
  secondary: {
    color: 'white',
  }
})

export default function StyledText({children, h1, h2, h3, h4, bold, center, secondary}){
  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    bold && styles.bold,
    secondary && styles.secondary,
  ]

  const containerStyles = [
    center && styles.center,
  ]

  return (
    <View style={containerStyles}>
      <Text style={textStyles}>
        {children}
      </Text>
    </View>
  )
}
