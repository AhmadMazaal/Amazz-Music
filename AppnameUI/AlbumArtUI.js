import * as React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const link = {uri:"https://img.discogs.com/KpT7OC1Yqm59NFOjcpFKVWUaCXY=/fit-in/440x392/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4759403-1374607389-4909.jpeg.jpg"}
export default function AlbumArt(){
    return(
        <View style={styles.container}>
            <Image source={link} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        alignItems:"center",

    },
    img:{
        width:300,
        maxWidth:"80%",
        height:300,
        borderRadius:10,
    },
})