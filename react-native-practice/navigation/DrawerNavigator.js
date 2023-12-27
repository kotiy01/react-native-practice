import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import { BooksStackNavigator } from './StackNavigator';
import { FilmsNativeStackNavigator } from './NativeStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
            drawerStyle: { backgroundColor: '#222831' }, // фоновый цвет бокового меню
            drawerActiveBackgroundColor: '#00ADB5', // фоновый цвет выбранной ссылки
            drawerActiveTintColor: '#EEEEEE', // цвет шрифта выбранной страницы
            drawerInactiveTintColor: '#EEEEEE', // цвет шрифта невыбранных страниц
        }}>
            <Drawer.Screen name='Меню' component={TabNavigator} />
            <Drawer.Screen name='Книги' component={BooksStackNavigator} />
            <Drawer.Screen name='Фильмы' component={FilmsNativeStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;