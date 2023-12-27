import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BooksScreen from '../screens/BooksScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';

const Stack = createStackNavigator();

const BooksStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Книги Список" component={BooksScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Страница книги" component={BookDetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};


export { BooksStackNavigator };
