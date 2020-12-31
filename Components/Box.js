import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function Box(props){
    
    const alertFunction = () =>{
        alert("Hello")
    }

    return(
        <TouchableOpacity onPress ={alertFunction.bind(this)} style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:140,
        height:140,
        
        // marginVertical:15,
        justifyContent:"center",
        alignItems:"center",
        // shadowColor:"black",
        // shadowOpacity:0.26,
        // shadowRadius:3,
        // shadowOffset:{height:0, width:2},
        // elevation:5,
        // borderColor:"white",
        // backgroundColor:"#fff",
        // borderColor:"black",
        // borderWidth:1,
        borderRadius:3,
    },
    text:{
        fontSize:25,
        color:"white",
    },


})
