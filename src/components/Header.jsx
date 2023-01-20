import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        SiuuApp
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '400'
  }
})

export default Header
