import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Главная</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainText}>Добро пожаловать в наш уютный уголок для истинных ценителей литературы и кинематографа! Здесь вы найдете вдохновение и возможность поделиться своими впечатлениями о любимых книгах и фильмах. Оценивайте, обсуждайте, получайте рекомендации и делитесь своими уникальными рецензиями с единомышленниками. Переходите в боковое меню и дайте голос вашим впечатлениям, создавайте свою литературную и кинематографическую историю вместе с нами!</Text>
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

export default HomeScreen;