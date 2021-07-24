import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import UserDetailScreen from '../Screens/UserDetailScreen';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
