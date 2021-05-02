import wateringImg from '@assets/watering.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const Welcome = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('UserIdentification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode='contain' />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.{'\n'}
          Nós cuidamos de lembrar você{'\n'}
          sempre que precisar.
        </Text>

        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.7}
          style={styles.button}>
          <Text>
            <Feather name='chevron-right' color={colors.white} size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    color: colors.heading,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },

  subtitle: {
    fontSize: 18,
    color: colors.heading,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontFamily: fonts.text,
    lineHeight: 25,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    borderRadius: 16,
    marginBottom: 30,
  },

  image: {
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').height * 0.4,
  },
});
