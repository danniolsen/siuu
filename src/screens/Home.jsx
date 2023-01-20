import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import Header from '../components/Header'
import SiuuContainer from '../components/SiuuContainer'
import SiuuData from '../siuuData/Data.json'

const Home = () => {

  const audioTracks = [
    require('../../assets/sounds/siuu_3.m4a'),
    require('../../assets/sounds/siuu_2.m4a'),
    require('../../assets/sounds/siuu_1.m4a'),
    require('../../assets/sounds/siuu_4.m4a'),
    require('../../assets/sounds/siuu_5.m4a')
  ]
  
  const renderItem = ({ item }) => {
    return <SiuuContainer audio={audioTracks[item.id - 1]} icon={item.icon} title={item.title} description={item.description} />
  }

  return(
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={SiuuData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

export default Home
