import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Siuu from '../screens/Siuu'
import { View, Text } from 'react-native'

const Tab = createBottomTabNavigator();



const Home = () => {
  return(
    <View>
      <Text>hej</Text>
    </View>
  )
}

export default RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Siuu" component={Siuu} />
        {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
