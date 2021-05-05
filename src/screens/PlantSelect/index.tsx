import { EnvironmentButton } from '@components/EnvironmentButton';
import { Header } from '@components/Header';
import { PlantCardPrimary } from '@components/PlantCardPrimary';
import { api } from '@services/api';
import colors from '@styles/colors';
import fonts from '@styles/fonts';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface EnvironmentProps {
  key: string;
  title: string;
}
interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  const handlePressActive = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === 'all') return setFilteredPlants(plants);

    const filtered = plants.filter((plant) =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        'plants_environments?_sort=title&_order=asc',
      );

      setEnvironments([
        {
          key: 'all',
          title: 'todos',
        },
        ...data,
      ]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('plants?_sort=name&_order=asc');

      setPlants(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.textContent}>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handlePressActive(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
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
    marginBottom: 40,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
