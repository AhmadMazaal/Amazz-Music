import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, ScrollView, SafeAreaView, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Ionicons from 'react-native-vector-icons/Ionicons';



import Box from '../Components/Box';
import Header from '../Components/Header';
import Input from '../Components/Input'
import Colors from '../Constants/Colors';

const techno = { uri:  "https://www.discoverwalks.com/blog/wp-content/uploads/2020/01/alexander-popov-htv8aapzioq-unsplash-816x544.jpg" };

const image = { uri:  "https://images.pexels.com/photos/2796145/pexels-photo-2796145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" };

const jazz = {uri : "https://s3.envato.com/files/273350922/DSC_5500.jpg"}

const hiphop = {uri: "https://i1.wp.com/www.capricorndance.com.au/wp-content/uploads/2017/03/hiphop-video-background-img-2.jpg?ssl=1"}

const trance = {uri: "https://los40es00.epimg.net/los40/imagenes/2019/09/26/musica/1569499797_895878_1569500018_rrss_normal.jpg"}

const rap = {uri: "https://allmusics.info/wp-content/uploads/2020/01/Run-DMC-Adidas.png"}



const HomeScreen = ({ navigation }) => {

  
  return (
    <SafeAreaView style={styles.wrapper}>

    <ScrollView> 
    <Header text="App Name" style={styles.header}/>
    {/* <Button title="Exit" onPress={BackHandler.exitApp.bind(this)} /> */}
    <ImageBackground source = {image} style = {styles.image}>
    <Text style={styles.title}>Lates Music</Text>
      
        <View style={styles.searchContainer}>
          <Input  />
        </View>
      <View style={styles.container}>
        <ImageBackground source = {jazz} style={styles.boxImg}>
          <Box text="Jazz" />
        </ImageBackground>

        <ImageBackground source = {hiphop} style={styles.boxImg}>
          <Box text="HipHop" />
        </ImageBackground>

        <ImageBackground source = {trance} style={styles.boxImg}>
          <Box text="Trance" />
        </ImageBackground>

        <ImageBackground source = {techno} style={styles.boxImg}>
          <Box text="Techno" />
        </ImageBackground>
        <ImageBackground source = {rap} style={styles.boxImg}>
          <Box text="Rap" />
        </ImageBackground>
        <ImageBackground source = {techno} style={styles.boxImg}>
          <Box text="Techno" />
        </ImageBackground>
        <ImageBackground source = {techno} style={styles.boxImg}>
          <Box text="Techno" />
        </ImageBackground>
        <ImageBackground source = {techno} style={styles.boxImg}>
          <Box text="Techno" />
        </ImageBackground>

   
        <StatusBar style="auto" />
      </View>
      </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
export default HomeScreen;



const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      marginVertical:40,
      justifyContent:"space-evenly",
      alignContent:"space-around",
      flexWrap:"wrap",
    },
    wrapper:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    test:{
      color:"white"
    },
    title:{
      color:"white",
      fontSize:35,
      textAlign:"center",
      padding:15,
    },
    image:{
      resizeMode:"cover",
      justifyContent:"center",
      // height:Dimensions.get('window').height,
    },
    boxImg:{
      resizeMode:"cover",
      justifyContent:"center",
      height:140,
      width:140,
      marginBottom:20,
    },
    header:{
      paddingBottom:50,
    },
    searchContainer:{

      
    },
  });