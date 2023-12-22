import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const filmsData = [
    { id: '1', 
      title: 'Интерстеллар', 
      director: 'Кристофер Нолан', 
      genre: 'приключения, драма, фантастика',
      country: 'США, Великобритания, Канада',
      year: '2014',
      description: 'Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
      image: require('../images/film1.jpg'),
    },
    { id: '2', 
      title: 'Малыш на драйве', 
      director: 'Эдгар Райт', 
      genre: 'боевик, драма, преступление, музыка', 
      country: 'Великобритания, США',
      year: '2017',
      description: 'Молодой парень по прозвищу Малыш обожает стильную музыку, быструю езду и адреналин в крови. Вся его жизнь — это сплошные погони и перестрелки, ведь он работает водителем, который помогает бандитам скрыться с места преступления. Однажды он по-настоящему влюбляется и решает выйти из игры, но сначала ему предстоит выполнить ещё одно задание, которое вполне может оказаться последним в его жизни.',
      image: require('../images/film2.jpg'),
    },
    { id: '3', 
      title: 'Остров проклятых', 
      director: 'Мартин Скорсезе', 
      genre: 'триллер, детектив, драма', 
      country: 'США',
      year: '2009',
      description: 'Два американских судебных пристава отправляются на один из островов в штате Массачусетс, чтобы расследовать исчезновение пациентки клиники для умалишенных преступников. При проведении расследования им придется столкнуться с паутиной лжи, обрушившимся ураганом и смертельным бунтом обитателей клиники.',
      image: require('../images/film3.jpg'),
    },
    { id: '4', 
      title: 'Джентльмены', 
      director: 'Гай Ричи', 
      genre: 'криминал, комедия, боевик', 
      country: 'США, Великобритания',
      year: '2019',
      description: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
      image: require('../images/film4.jpg'),
    },
];

const FilmsScreen = () => {
  const navigation = useNavigation();
  const handleFilmPress = (film) => {
    navigation.navigate('Страница фильма', { film });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
          {filmsData.map((film) => (
            <TouchableOpacity style={styles.card} key={film.id} onPress={() => handleFilmPress(film)}>
              <Image source={film.image} style={styles.image} />
              <View style={styles.textBlock}>
                <Text style={styles.cardTitle}>{film.title}</Text>
                <Text style={styles.cardText}>Жанр: {film.genre}</Text>
                <Text style={styles.cardText}>Страна: {film.country}</Text>
                <Text style={styles.cardText}>Год: {film.year}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  scroll: {
    width: '100%',
    backgroundColor: '#222831',
    paddingTop: 22,
    paddingBottom: 22,
  },
  card: {
    width: '90%',
    height: 220,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#393E46',
    marginBottom: 22,
    marginLeft: '5%',
  },
  textBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    width: '60%',
  },
  image: {
    height: 220,
    width: 130,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EEEEEE',
    padding: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#EEEEEE',
    paddingLeft: 12,
    marginBottom: 12,
  },
});

export default FilmsScreen;