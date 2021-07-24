import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const UserCard = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: props.profileImage,
          }}
          resizeMode={'cover'}
        />
        <View style={styles.detailWrapper}>
          <Text style={styles.nameStyle} numberOfLines={2} ellipsizeMode="tail">
            {props.name}
          </Text>
          <Text
            style={styles.companyStyle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.company}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;
const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    flex: 1,
    borderWidth: 0.5,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  nameStyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  companyStyle: {
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 12,
  },
  imgStyle: {
    width: 150,
    height: 100,
  },
  detailWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
