import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const FilmDetailsScreen = () => {
  const route = useRoute();
  const { film } = route.params;

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={StyleSheet.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity onPress={handleBackPress} style={styles.btnBack}><AntDesign name="arrowleft" size={24} color="#00ADB5" /><Text style={styles.linkText}>Вернуться</Text></TouchableOpacity>
        <View style={styles.contentBlock}>
          <View style={styles.mainBlock}>
            <Image source={film.image} style={styles.image} />
            <View style={styles.textBlock}>
              <Text style={styles.cardTitle}>{film.title}</Text>
              <Text style={styles.cardText}>Жанр: {film.genre}</Text>
              <Text style={styles.cardText}>Страна: {film.country}</Text>
              <Text style={styles.cardText}>Год: {film.year}</Text>
            </View>
          </View>
          <View style={styles.descBlock}>
            <Text style={styles.subTitle}>Описание</Text>
            <Text style={styles.descText}>{film.description}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Написать рецензию</Text></TouchableOpacity>
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
    alignItems: 'flex-start',
    backgroundColor: '#222831',
  },
  scroll: {
    width: '100%',
    backgroundColor: '#222831',
    paddingTop: 20,
    height: '100%',
  },
  btnBack: {
    width: '20%',
    height: 24,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linkText: {
    color: '#00ADB5',
    fontSize: 14,
    marginLeft: 4,
  },
  contentBlock: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginTop: 20,
  },
  mainBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  descBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  textBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '65%',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  descText: {
    fontSize: 18,
    color: '#EEEEEE',
    marginTop: 10,
  },
  image: {
    height: 220,
    width: 130,
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#EEEEEE',
    padding: 12,
  },
  cardText: {
    fontSize: 18,
    color: '#EEEEEE',
    paddingLeft: 12,
    marginBottom: 12,
  },
  button: {
    width: '60%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ADB5',
    borderRadius: 4,
    marginLeft: '20%',
    marginTop: 20,
    marginBottom: 60,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
});

export default FilmDetailsScreen;