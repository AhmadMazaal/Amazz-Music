import * as React from 'react'
import {View,StyleSheet, Text} from 'react-native'
import Colors from '../Constants/Colors'

export default function HeaderUI(){
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Library</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        // borderColor:"white",
        // borderWidth:1,
        // padding:10,
    },
    txt:{
        fontSize:30,
        color:Colors.primary,
    }
})