/* eslint-disable prettier/prettier */
import React from 'react';
import {WebView} from 'react-native-webview';

const ViewLinkScreen = ({route, navigation}) => {
  const {externelLink} = route.params;

  return <WebView style={{marginTop: 20}} source={{uri: externelLink}} />;
};

export default ViewLinkScreen;
