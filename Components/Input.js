import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Input(){


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Search: </Text>
            <TextInput style={styles.text} />
          <TouchableOpacity onPress={()=>alert("Searching...")}>
              <Ionicons name="md-search" color={Colors.primary} size={26} />
          </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",

    },
    text:{
        borderBottomColor:"white",
        borderWidth:2,
        width:180,
        color:"white"
    },
    label:{
        color:Colors.primary,
        fontSize:18,
        fontWeight:"bold",
    },
})