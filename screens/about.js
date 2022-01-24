import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.about}>
        This app is build using React Native. It uses some more complex
        components like Navigation (Stack and Drawer), Formik and Yup. In this,
        custom fonts are also used. It also uses some custom made components
        like Card and FlatButton.
      </Text>
      <Text style={styles.text}>That's all folks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    color: '#444',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 30,
  },
  text: {
    color: '#444',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
