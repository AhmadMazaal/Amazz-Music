import Slider from 'react-native-slider';
import * as React from 'react'
import {View,StyleSheet, Text} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from '../Constants/Colors'


export default function Seekbar(){
    return(
        <View style={styles.container}>
        <Slider       
        thumbTintColor ='#343434'
        animateTransitions={true}
        animationType="timing"
        thumbTintColor={Colors.primary}
        
        style={styles.slider}

         />
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",

    },
    slider:{
        width:300,
        paddingVertical:10,
        
    },
})