import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../Constants/Colors';
// import LinearGradient from 'expo-linear-gradient'
import LinearGradient from 'react-native-linear-gradient';

export default function Header(props) {
    return(
        <View style={styles.container}>
            <Text style = {styles.text} >{props.text}</Text>
            {/* <LinearGradient
        colors={['red', 'yellow', 'green' ]}
        style={styles.linearGradient}
        start={{ x: 0.7, y: 0 }}
      >
        <Text>Diagonal Gradient</Text>
      </LinearGradient> */}
        </View>
    )
    // background-color: #7f5a83;
// background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        maxWidth:"100%",
        paddingVertical:60,
        backgroundColor:Colors.primary,
    },
    text:{
        fontSize:22,
        color:"white",
        fontWeight:"bold",
    },
    
})