import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import VideoPlayScreen from './screens/VideoPlayScreen';
import ViewLinkScreen from './screens/ViewLinkScreen';
import SearchFormScreen from './screens/SearchFormScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import WebScreen from './screens/WebScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <HomeScreen />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoPlay" component={VideoPlayScreen} />
        <Stack.Screen name="ViewLink" component={ViewLinkScreen} />
        <Stack.Screen name="SearchForm" component={SearchFormScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="Web" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
