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
    width: '100%', // ширина контейнера 100% от ширины экрана
    flex: 1, // контейнер занимает все доступное пространство
    flexDirection: 'column', // направление, по которому выстраиваются элементы, в данном случае в колонку
    justifyContent: 'flex-start', // элементы выравниваются по вертикали сначала
    alignItems: 'center', // элементы выстраиваются по горизонтали по центру
    backgroundColor: '#222831', // фоновый цвет
  },
  scroll: {
    width: '100%', // ширина 100% от контейнера
    backgroundColor: '#222831', // фоновый цвет
    paddingTop: 22, // внутренний отступ сверху 22px
    paddingBottom: 22, // внутренний отступ снизу 22px
  },
  card: {
    width: '90%', // ширина карточки 90% от scroll
    height: 220, // высота карточки 220px
    display: 'flex', // создание флексбокса
    flexDirection: 'row', // направление, по которому выстраиваются элементы, в данном случае в ряд
    justifyContent: 'flex-start', // элементы выравниваются по вертикали сначала
    alignItems: 'flex-start', // элементы выравниваются по горизонтали сначала
    backgroundColor: '#393E46', // фоновый цвет
    marginBottom: 22, // отступ снизу 22px
    marginLeft: '5%', // отступ слева 5% (из-за того, что ScrollView не может быть флексбоксом, то, чтобы разместить карточку шириной 90% по центру, можно отступить слева 5%, справа от карточки отже останется отступ 5%)
  },
  textBlock: {
    display: 'flex', // создание флексбокса
    alignItems: 'flex-start', // элементы выравниваются по горизонтали сначала
    justifyContent: 'flex-start', // элементы выравниваются по вертикали сначала
    flexDirection: 'column', // направление, по которому выстраиваются элементы, в данном случае в колонку
  },
  image: {
    height: 220, // высота изображения 220px
    width: 130, // ширина изображения 130px
    resizeMode: 'cover', // масштабируем изображение так, чтобы оно полностью занимало пространство 220*130px, при этом сохранив соотношение сторон (изображение изначально обрезается из-за неправильного соотношения сторон)
  },
  cardTitle: {
    fontSize: 22, // размер шрифта 22px
    fontWeight: 'bold', // жирность шрифта
    color: '#EEEEEE', // цвет шрифта
    padding: 12, // внутренние отступы со всех сторон 12px
  },
  cardText: {
    fontSize: 16, // размер шрифта 16px
    color: '#EEEEEE', // цвет шрифта
    paddingLeft: 12, // внутренний отступ слева 12px
    marginBottom: 12, // отступ снизу 12px
  },
});

export default BooksScreen;