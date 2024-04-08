import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

const size = 300;

export default function App() {

  const moonAnimation = useRef(new Animated.Value(0)).current;
  const [active, setActive] = useState(false);

  useEffect(() => {
  }, []);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-size, -parseInt(size*.2)]
  });

  const move = () => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setActive(!active)
  };

  const moveBack = () => {
    Animated.timing(moonAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setActive(!active)

  };

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>March 8th, 2024 Eclipse 🌒🇲🇽!</Text>
      <View style = {styles.eclipseContainer}>
        <Animated.View style = {styles.sun}></Animated.View>
        <Animated.View style = {[styles.moon, {transform: [{translateX: moonLeft}]}]}></Animated.View>
      </View>
      <TouchableOpacity style = {styles.button} onPress={active? move : moveBack}>
        <Text style = {styles.text}>{active ? "Go!" : "Again"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sun: {
    backgroundColor: "#FDB813",
    width: size,
    height: size,
    borderRadius: 300,
    shadowRadius: 10,
    shadowColor: "#fff",
    marginLeft: 100,
    position: 'absolute',
  },
  moon: {
    backgroundColor: "black",
    width: size,
    height: size,
    borderRadius: 300,
    shadowRadius: 10,
    shadowColor: "#fff",
  },
  button: {
    backgroundColor: 'crimson',
    width: 250,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  eclipseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
