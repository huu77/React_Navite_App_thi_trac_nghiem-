 
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
 import Navigation from './src/Navigation';
function App() {
  
  

  return (

      <Navigation/>
 
  );
}

const styles = StyleSheet.create({
  
});

export default App;
