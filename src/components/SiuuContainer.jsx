
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av'
import Ionicons from '@expo/vector-icons/Ionicons';

const SiuuContainer = ({ audio, title, icon, description }) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    setIsPlaying(true)
      
      const { sound,  } = await Audio.Sound.createAsync(audio);
      Audio.setAudioModeAsync({playsInSilentModeIOS: true})
      setSound(sound);
      await sound.playAsync()

      setTimeout(()=> {
        setIsPlaying(false)

      }, 1500)
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return(
    <TouchableOpacity onPress={()=> playSound()} disabled={isPlaying} style={styles.container}>
      <View style={[styles.innerContainer]}>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name={icon} size={24}/>
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
        
        
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  innerContainer:{
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c8e1ff',
    backgroundColor: '#f1f8ff'
  },
  titleContainer:{
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  title:{
    fontSize: 24,
    flex: 3,
    lineHeight: 24,
    color: '#06264c',
    fontWeight: '400'
  },
  descriptionContainer:{
    backgroundColor: '#fffdef',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,    
  },
  description: {
    color: '#725c10',
    fontSize: 15,
    lineHeight: 18
  }
})

export default SiuuContainer
