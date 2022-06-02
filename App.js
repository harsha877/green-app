import * as React from 'react';
import MainContainer from './src/mainContainer';
import { LogBox } from 'react-native';


function App() {
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <MainContainer/>
  );
}

export default App;
