import Slider from 'react-native-slider';
import * as React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Colors from '../Constants/Colors'




export default function PLaybackControls(props){

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress = {props.handlePreviousTrack.bind(this)}>
                <MaterialCommunityIcons name="skip-previous" color={Colors.primary} size={40} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress = {props.handlePlayPause.bind(this)}>
                <MaterialIcons name="play-circle-outline"  color={Colors.primary} size={60} />
            </TouchableOpacity>

            <TouchableOpacity onPress={props.handleNextTrack.bind(this)}>
                <MaterialCommunityIcons name="skip-next" color={Colors.primary} size={40} />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
    }
})  