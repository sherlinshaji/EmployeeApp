import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import UserCard from '../Components/UserCard';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const STORAGE_KEY = '@save_data';

  const readData = async () => {
    const asyncData = await AsyncStorage.getItem(STORAGE_KEY);
    if (data.length !== 0) {
      setData(asyncData);
    } else {
      try {
        const response = await fetch(
          'http://www.mocky.io/v2/5d565297300000680030a986',
        );
        const json = await response.json();
        AsyncStorage.setItem(STORAGE_KEY, json);
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    readData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <UserCard
        profileImage={item.profile_image}
        name={item.name}
        company={item.company?.name}
        onPress={() => navigation.navigate('UserDetail', {data: item})}
      />
    );
  };

  return (
    <ScrollView
      style={{
        height: Dimensions.get('window').height,
      }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Employee List</Text>
        </View>

        <FlatList
          style={styles.cardWrapper}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  titleContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  tabStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  cardWrapper: {
    flex: 1,
  },
});
