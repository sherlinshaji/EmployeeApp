import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import StackNav from './Navigatiors/StackNav';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
