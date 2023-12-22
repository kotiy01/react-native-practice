import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const booksData = [
    { id: '1', 
      title: 'Долгая прогулка', 
      author: 'Стивен Кинг', 
      genre: 'Роман', 
      description: '«Долгая прогулка» — роман американского писателя Стивена Кинга в жанре триллера с элементами психологической драмы, написанный в 1966 году и впоследствии опубликованный в 1979 году под псевдонимом Ричард Бахман.',
      image: require('../images/book1.jpg'),
    },
    { id: '2', 
      title: 'Четыре сезона', 
      author: 'Стивен Кинг', 
      genre: 'Роман', 
      description: '«Четыре сезона» — сборник четырёх повестей американского писателя Стивена Кинга, впервые опубликованный в 1982 году. Каждая повесть имеет подзаголовок, соотносящий её с одним из времён года. Первый авторский сборник Кинга, занявший первое место в списке бестселлеров «Нью-Йорк Таймс».',
      image: require('../images/book2.jpg'),
    },
    { id: '3', 
      title: 'Наивно. Супер', 
      author: 'Эрленда Лу', 
      genre: 'Роман', 
      description: '«Наивно. Супер» — это роман норвежского писателя Эрленда Лу. Перед нами история двадцатипятилетнего парня, который переживает некий кризис. Почему некий? Потому что в какой-то момент он осознаёт, что всё для него утратило смысл.',
      image: require('../images/book3.jpg'),
    },
    { id: '4', 
      title: 'Зелёная миля', 
      author: 'Стивен Кинг', 
      genre: 'Роман', 
      description: '«Зелёная миля» — тридцатый роман американского писателя Стивена Кинга в жанре психологической драмы с элементами тёмного фэнтези и южной готики.',
      image: require('../images/book4.jpg'),
    },
];

const BooksScreen = () => {
  const navigation = useNavigation();
  const handleBookPress = (book) => {
    navigation.navigate('Страница книги', { book });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
          {booksData.map((book) => (
            <TouchableOpacity style={styles.card} key={book.id} onPress={() => handleBookPress(book)}>
              <Image source={book.image} style={styles.image} />
              <View style={styles.textBlock}>
                <Text style={styles.cardTitle}>{book.title}</Text>
                <Text style={styles.cardText}>Автор: {book.author}</Text>
                <Text style={styles.cardText}>Жанр: {book.genre}</Text>
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
    fontSize: 16,
    color: '#EEEEEE',
    paddingLeft: 12,
    marginBottom: 12,
  },
});

export default BooksScreen;