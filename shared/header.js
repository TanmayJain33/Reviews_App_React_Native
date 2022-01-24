import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Menu from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}>
      <Menu
        name="menu"
        size={28}
        color="#333"
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    marginLeft: -20,
    width: '103.5%',
    height: '130%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: 'row',
  },
});
