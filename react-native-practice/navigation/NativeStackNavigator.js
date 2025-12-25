import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FilmsScreen from '../screens/FilmScreen';
import FilmDetailScreen from '../screens/FilmDetailsScreen';

const NativeStack = createNativeStackNavigator();

const FilmsNativeStackNavigator = () => {
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen name="Книги Список" component={FilmsScreen} options={{ headerShown: false }} />
            <NativeStack.Screen name="Страница фильма" component={FilmDetailScreen} options={{ headerShown: false }} />
        </NativeStack.Navigator>
    );
};

export { FilmsNativeStackNavigator };