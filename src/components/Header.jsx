import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        The Siuu network
      </Text>
      <Text style={styles.subTitle}>
        One siuu at the time
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
  },
  subTitle:{
    fontSize: 12,
    lineHeight: 12
  }
})

export default Header
