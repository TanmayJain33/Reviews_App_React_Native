import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({route}) {
  const {title} = route.params;
  const {rating} = route.params;
  const {body} = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <View style={styles.rating}>
          <Text style={{color: '#444'}}>GameZone Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: '#444',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  body: {
    textAlign: 'center',
    fontSize: 16,
    color: '#444',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
