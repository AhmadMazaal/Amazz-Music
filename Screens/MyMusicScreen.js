import Header from '../Components/Header';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Modal, Button, } from 'react-native';
import Colors from '../Constants/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Audio } from 'expo-av'


import HeaderUI from '../AppnameUI/HeaderUI'
import Slider from '../AppnameUI/Seekbar'
import AlbumArt from '../AppnameUI/AlbumArtUI'
import PLaybackControls from '../AppnameUI/PlayBackControls';
import TrackDetails from '../AppnameUI/TrackDetails';


const audioBookPlaylist = [
  {
    title: 'Hamlet - Act I',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act II',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act III',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri: 'http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act IV',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  },
  {
    title: 'Hamlet - Act V',
    author: 'William Shakespeare',
    source: 'Librivox',
    uri:
      'https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3',
    imageSource: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
  }
]


const MyMusicScreen = ({ navigation }) => {
  
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playback, playbackInstance] = React.useState(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [buffering, isBuffering] = React.useState(false);
  const [volume, setVolume] = React.useState(0);
  const [song,setSong] = React.useState([])
  const [visible, setVisible] = React.useState(false)

  React.useEffect(()=> {
    fetch('http://192.168.137.1:3000/songs')
    .then(response => response.json())
    .then(users => setSong([...users,{ id: Math.random().toString(), value: song}]))
    .catch((err) =>console.log(err))
  },[])

  React.useEffect(() =>{
    async () =>{
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      },[])
 
      loadAudio()
    } catch (e) {
      console.log(e)
    }
  }
})
 
 
const loadAudio = async () => {
  // const {currentIndex, isPlaying, volume} = this.state
   
  try {
    const playInstance = new Audio.Sound()
    const source = {
      uri: audioBookPlaylist[currentIndex].uri
    }
 
    const status = {
      shouldPlay: isPlaying,
      volume
    }
 
    playInstance.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)     
    await playInstance.loadAsync(source, status, false)
    playbackInstance(playback)
    } catch (e) {
      console.log(e)
    }
}
 
const onPlaybackStatusUpdate = status => {
  isBuffering(status.buffering);
}
const handlePlayPause = async () => {
  isPlaying ? await playback.pauseAsync() : await playback.playAsync()
  setIsPlaying(!isPlaying)
}

const handlePreviousTrack = async () => {
  if (playback) {
    await playback.unloadAsync()
    currentIndex < audioBookPlaylist.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
      setCurrentIndex(currentIndex)
      loadAudio()
  }
}

const handleNextTrack = async () => {
  if (playback) {
    await playback.unloadAsync()
    currentIndex < audioBookPlaylist.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
    setCurrentIndex(currentIndex);
    loadAudio()
  }
}
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <Header text="App Name" style={styles.header}/>

          <FlatList
          keyExtractor={(item,index) => item.id.toString()}
          data = {song}
          renderItem = {itemData =>(
            <TouchableOpacity style={styles.container} onPress={setVisible.bind(this,true)} >
              <Image source={{uri:itemData.item.image}} style={styles.img} />
              <Text style={styles.txt}>{itemData.item.artist}</Text>
              <Modal visible={visible}  >
                <View style={styles.modal}>
                  <TouchableOpacity style={styles.backBtn} onPress={setVisible.bind(this,false)}>
                    <MaterialIcons color={Colors.primary} name="keyboard-arrow-left" size={26}  />
                    <Text style={{color:Colors.primary,fontSize:20}}>Back</Text>
                  </TouchableOpacity>

                  <HeaderUI/>
                  <AlbumArt/>
                  <TrackDetails/>
                  <Slider/>
                  <PLaybackControls handlePlayPause = {handlePlayPause} handlePreviousTrack = {handlePreviousTrack} handleNextTrack ={handleNextTrack} />
                </View>
                
              </Modal>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );
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
      borderRadius:5,
      width:"90%",
    },
    backBtn:{
      alignItems:"flex-start",
      padding:15,
      flexDirection:"row",
      alignItems:"center",
    },
    modal:{
      backgroundColor:"black",
      height:"100%",
    },
})


  export default MyMusicScreen;


 