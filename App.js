import * as React from 'react';
import MainContainer from './src/mainContainer';
import { LogBox } from 'react-native';


function App() {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
  return (
    <MainContainer/>
  );
}

export default App;
