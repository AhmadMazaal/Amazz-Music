import Header from '../Components/Header';
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Constants/Colors';
import { Modal, Button } from 'react-native-paper';


const SettingsScreen = ({ navigation }) => {

  const [visible, setVisible] = React.useState(false);
    return (
      <SafeAreaView>
      <Header text="App Name" style={styles.header}/>
          <View style={styles.wrapper}>
              <TouchableOpacity style={styles.options} onPress={setVisible.bind(this,true)}>
                  <Text style={styles.txt}>Music Player</Text>
                  <MaterialIcons name="keyboard-arrow-right" color={Colors.primary} size={30} />
              </TouchableOpacity>
    
            <View style={styles.options}>
              <Text style={styles.txt}>Account</Text>
              <MaterialIcons name="keyboard-arrow-right" color={Colors.primary} size={30} />
            </View>
            <View style={styles.options}>
              <Text style={styles.txt}>Events</Text>
              <MaterialIcons name="keyboard-arrow-right" color={Colors.primary} size={30} />
            </View>
            <View style={styles.options}>
              <Text style={styles.txt}>App Setting</Text>
              <MaterialIcons name="keyboard-arrow-right" color={Colors.primary} size={30} />
            </View>
            <View style={styles.options}>
              <Text style={styles.txt}>Log out</Text>
              <MaterialIcons name="keyboard-arrow-right" color={Colors.primary} size={30} />
            </View>
            <Modal visible={visible} >
                <View style={styles.modal}  >
                  <Button title='Back' />
          
      
                </View>
            </Modal>
          </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    wrapper:{
      flex:1,
      // color:"",
      alignItems:"center",
      justifyContent:"center",
    },
    txt:{
      // color:"white",
      fontSize:20,
    },
    options:{
      flexDirection:"row",
      marginVertical:10,
      // borderColor:"black",
      // borderWidth:1,
      justifyContent:"space-between",
      width:"90%",
    },
    modal:{
      height:"100%",
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
    },
})


export default SettingsScreen;