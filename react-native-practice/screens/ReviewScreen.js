import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const ReviewScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Написать рецензию</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainText}>Чтобы написать рецензию, откройте боковое меню, выберите раздел книги или фильмы, выберите книгу или фильм, на который хотите оставить отзыв, и дайте волю мыслям!</Text>
            </View>
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
    header:{
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#393E46',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#EEEEEE',
    },
    main: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
    },
    mainText: {
        color: '#EEEEEE',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 24,
    },
});

export default ReviewScreen;