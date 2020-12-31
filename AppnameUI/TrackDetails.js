import Slider from 'react-native-slider';
import * as React from 'react'
import {View,StyleSheet, Text, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';


export default function TrackDetails(){

    return(
        <View style={styles.container}>
            {/* <MaterialCommunityIcons */}
            {/* <MaterialCommunityIcons name="plus" color={Colors.primary} size={26} /> */}
            <TouchableOpacity>
                <MaterialIcons name="add-circle-outline" size={30} color={Colors.primary}/>
            </TouchableOpacity>
            <View styles={styles.descContainer} >
                <Text style={styles.title}>Laundry Service</Text>
                <Text style={styles.desc} >Studio album by Shakira</Text>
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name="dots-horizontal-circle-outline" color={Colors.primary} size={30} />
            </TouchableOpacity>
            {/* <MaterialCommunityIcons */}

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        // borderWidth:1,
        // borderColor:"white",
        marginVertical:20,
    },
    descContainer:{
        justifyContent:"center",
        alignItems:"center",
        
    },
    title:{
        color:Colors.primary,
        textAlign:"center",
        fontSize:20,
    },
    desc:{
        color:"white",
        paddingVertical:5,
    },
})