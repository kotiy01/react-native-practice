import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const BookDetailsScreen = () => {
  const route = useRoute();
  const { book } = route.params;

  const navigation = useNavigation();
  // const handleBackPress = () => {
  //   navigation.goBack();
  // };

  const [reviewText, setReviewText] = useState(''); // состояние для текста в поле ввода
  const [reviews, setReviews] = useState([]); // состояние для списка всех отзывов

  const handleAddReview = () => {
    if (reviewText.trim().length > 0) {
      // добавляем новый отзыв в массив
      const newReview = {
        id: Date.now().toString(),
        text: reviewText,
        username: 'Username',
      };
      setReviews([newReview, ...reviews]); // новый отзыв будет сверху
      setReviewText(''); // очистка поле ввода
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={StyleSheet.container}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity onPress={handleBackPress} style={styles.btnBack}><AntDesign name="arrow-left" size={18} color="#00ADB5" /><Text style={styles.linkText}>Вернуться</Text></TouchableOpacity>
        <View style={styles.contentBlock}>
          <View style={styles.mainBlock}>
            <Image source={book.image} style={styles.image} />
            <View style={styles.textBlock}>
              <Text style={styles.cardTitle}>{book.title}</Text>
              <Text style={styles.cardText}>Автор: {book.author}</Text>
              <Text style={styles.cardText}>Жанр: {book.genre}</Text>
            </View>
          </View>
          <View style={styles.descBlock}>
            <Text style={styles.subTitle}>Описание</Text>
            <Text style={styles.descText}>{book.description}</Text>
          </View>
        </View>

        <View style={styles.reviewInputContainer}>
            <Text style={styles.subTitle}>Написать рецензию</Text>
            <TextInput
              style={styles.input}
              placeholder="Ваш отзыв..."
              value={reviewText}
              onChangeText={setReviewText}
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleAddReview}>
              <Text style={styles.btnText}>Опубликовать</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.reviewsList}>
            <Text style={styles.subTitle}>Рецензии ({reviews.length})</Text>
            {reviews.length === 0 ? (
              <Text style={styles.emptyText}>Пока нет отзывов. Будьте первым!</Text>
            ) : (
              reviews.map((item) => (
                <View key={item.id} style={styles.reviewItem}>
                  <Text style={styles.reviewUser}>{item.username}</Text>
                  <Text style={styles.reviewText}>{item.text}</Text>
                </View>
              ))
            )}
          </View>
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
    width: '60%', // ширина 60% от scroll
    height: 48, // высота 48px
    display: 'flex', // создание флексбокса
    justifyContent: 'center', // элементы выравниваются по вертикали по центру
    alignItems: 'center', // элементы выравниваются по горизонтали по центру
    backgroundColor: '#00ADB5', // фоновый цвет
    borderRadius: 4, // закругленность углов рамки
    marginLeft: '20%', // отступ слева 20%
    marginTop: 20, // отступ сверху 20px
    marginBottom: 20, // отступ снизу 20px
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  reviewInputContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginTop: 20,
  },
  input: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    color: '#AAA',
    borderRadius: 4,
    borderColor: '#777',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 6,
  },
  reviewsList: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginTop: 20,
    marginBottom: 160,
  },
  emptyText: {
    color: '#777777',
    fontSize: 18,
    marginTop: 12,
  },
  reviewUser: {
    color: '#00ADB5',
    fontSize: 18,
    marginTop: 12,
  },
  reviewText: {
    color: '#EEEEEE',
    fontSize: 18,
    marginTop: 12,
  },
  reviewItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
  }
});

export default BookDetailsScreen;