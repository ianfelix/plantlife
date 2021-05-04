import { EnvironmentButton } from '@components/EnvironmentButton';
import { Header } from '@components/Header';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.textContent}>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          keyExtractor={(item) => String(item)}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({ item }) => <EnvironmentButton title='Sala' />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  textContent: {
    paddingHorizontal: 32,
  },

  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    fontWeight: '500',
    color: colors.heading,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    fontWeight: '400',
    color: colors.heading,
    lineHeight: 23,
  },

  contentContainerStyle: {
    marginTop: 24,
    paddingLeft: 32,
  },
});
