import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const UserDetailScreen = ({route, navigation}) => {
  const [data] = useState(route.params.data);
  const labelValComp = (label, value) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.labelStyle}>{label}</Text>
        <Text style={styles.labelStyle}> - </Text>
        <Text style={styles.valueStyle}>{value}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        height: Dimensions.get('window').height,
      }}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Image
          style={styles.headerImg}
          source={require('../Assets/images/header.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: data.profile_image,
          }}
          resizeMode={'contain'}
        />
        <Text style={styles.titleStyle}>Employee Detail</Text>
        <View style={styles.detailContainer}>
          {labelValComp('Name', data.name)}
          {labelValComp('User name', data.username)}
          {labelValComp('Email', data.email)}
          <View style={styles.boxStyle}>
            <Text style={styles.subTitle}>Address</Text>
            {labelValComp('Street', data.address?.street)}
            {labelValComp('Suit', data.address?.suite)}
            {labelValComp('City', data.address?.city)}
            {labelValComp('Pin code', data.address?.zipcode)}
          </View>
          {labelValComp('Phone', data.phone)}
          {labelValComp('Website', data.website)}
          <View style={styles.boxStyle}>
            <Text style={styles.subTitle}>Company Details</Text>
            {labelValComp('Company Name', data.company?.name)}
            {labelValComp('Catch Phrase', data.company?.catchPhrase)}
            {labelValComp('bs', data.company?.bs)}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  imgStyle: {
    height: 180,
    backgroundColor: '#FFFBF3',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 24,
    paddingBottom: 16,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    flex: 1,
  },
  valueStyle: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
  detailContainer: {
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 8,
  },
  boxStyle: {
    backgroundColor: '#FFFBF3',
    padding: 8,
    borderRadius: 8,
  },
  tabStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#FFFBF3',
    justifyContent: 'center',
  },
  headerImg: {
    width: 40,
    height: 40,
  },
});
