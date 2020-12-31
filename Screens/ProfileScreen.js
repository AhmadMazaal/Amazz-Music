
import Header from '../Components/Header';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList} from 'react-native';


const blank = {uri: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
const ProfileScreen = ({ navigation }) => {
  return(
  <SafeAreaView style={{ flex: 1 }}>
  <Header text="App Name" style={styles.header}/>
      <View style={styles.container}>
        <Image source = {blank} style={styles.img}/>
        <Text>
          You are on Profile Screen
        </Text>
      </View>
  </SafeAreaView>
  )
  }
  const styles = StyleSheet.create({
    container:{
      justifyContent:"center",
      alignItems:"center",
      marginVertical:20,
    },
    txt:{
      fontWeight:"bold",
      fontSize:20,
      padding:15,
    },
    img:{
      height:200,
      width:200,
    },
})
export default ProfileScreen;