import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BooksScreen from '../screens/BooksScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import FilmsScreen from '../screens/FilmsScreen';
import FilmDetailScreen from '../screens/FilmDetailsScreen';

const Stack = createStackNavigator();

const BooksStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Книги Список" component={BooksScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Страница книги" component={BookDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const FilmsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Книги Список" component={FilmsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Страница фильма" component={FilmDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export { BooksStackNavigator, FilmsStackNavigator, };
