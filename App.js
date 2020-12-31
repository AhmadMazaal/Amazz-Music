import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';



import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SettingsScreen from './Screens/SettingsScreen';
import MyMusicScreen from './Screens/MyMusicScreen';



import Colors from './Constants/Colors';
const Tab = createMaterialBottomTabNavigator();



function MyTabs() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#fff"
        shifting={true}
        barStyle={{ backgroundColor: Colors.primary }}
      >
        <Tab.Screen 
          name="Home"
          component= {HomeScreen}
           options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} 
          />

          <Tab.Screen 
          name="Settings"
          component= {SettingsScreen}
           options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={26} />
            ),
          }} 
          />
          <Tab.Screen 
          name="Profile"
          component= {ProfileScreen}
           options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }} 
          />
          <Tab.Screen 
          name="music"
          component= {MyMusicScreen}
           options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="library-music" color={color} size={26} />
            ),
          }} 
          />
      </Tab.Navigator>
    </NavigationContainer>
  );

}





const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginVertical:40,
    justifyContent:"space-evenly",
    alignContent:"space-around",
    flexWrap:"wrap",
  },

});
export default MyTabs;
