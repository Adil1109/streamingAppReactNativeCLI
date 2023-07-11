/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import VideoPlayer from 'react-native-video-controls';
import YoutubeIframe from 'react-native-youtube-iframe';
import {isValidUrl, getVideoId} from 'is-youtube-url';
import capitalizeFirstLetter from '../components/Capitalize';

const windowWidth = Dimensions.get('window').width;

const VideoPlayScreen = ({route, navigation}) => {
  const {title, description, videoLink, externelLink} = route.params;

  const [ytURL, setYtURL] = useState(false);
  const [ytVideoID, setYtVideoID] = useState('');
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    const isValid = isValidUrl(videoLink);
    if (isValid) {
      setYtURL(true);
      const id = getVideoId(videoLink);
      setYtVideoID(id);
    } else {
      setYtURL(false);
    }
  }, [videoLink]);

  return (
    <SafeAreaView style={styles.Container}>
      {ytURL ? (
        <View>
          <YoutubeIframe
            height={250}
            width={windowWidth}
            play={playing}
            videoId={ytVideoID}
            onChangeState={onStateChange}
          />
        </View>
      ) : (
        <View style={styles.videoContainer}>
          <VideoPlayer
            style={styles.videoPlayerst}
            disableBack={true}
            source={{
              uri: videoLink,
            }}
          />
        </View>
      )}
      <Text style={styles.title}>{capitalizeFirstLetter(title)}</Text>
      <View style={styles.line} />
      <ScrollView>
        <Text style={styles.descriptionst}>{description}</Text>
        {externelLink === 'no-link' ? null : (
          <View style={styles.linkView}>
            <Text style={styles.useful}>Useful link:</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Web', {videoLink})}>
              <Text style={styles.link}>{videoLink}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewLink', {externelLink})}>
              <Text style={styles.link}>{externelLink}</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoPlayScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    color: '#222',
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 25,
  },
  videoContainer: {
    width: windowWidth,
    height: 350,
  },
  videoPlayerst: {
    width: windowWidth,
    height: 350,
  },
  line: {
    height: 1,
    width: windowWidth,
    backgroundColor: '#ddd',
    marginBottom: 10,
    elevation: 3,
  },
  descriptionst: {
    fontSize: 16,
    color: '#1B1212',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    margin: 10,
  },
  linkView: {
    margin: 10,
  },
  useful: {
    color: '#222',
  },
  link: {
    color: '#0F52BA',
  },
});
