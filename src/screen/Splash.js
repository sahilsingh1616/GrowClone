import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

const Splash = ({navigation}) => {
  const slideAnim = useRef(new Animated.Value(100)).current; // Initial value change to 100

  useEffect(() => {
    Animated.timing(
      slideAnim,
      {
        toValue: 0,
        duration: 2000, 
        useNativeDriver: true, 
      }
    ).start();
    setTimeout(() => {
      navigation.navigate('OtpScreen');
    }, 2000);
  }, [slideAnim,navigation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          opacity: slideAnim.interpolate({
            inputRange: [0, 100], // Modified inputRange
            outputRange: [1, 0], // Changed outputRange
          }),
        }}
      >
        <Image
          source={require('../../assets/Image/grow.png')}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
});

export default Splash;
