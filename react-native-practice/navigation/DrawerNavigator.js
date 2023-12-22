import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import { BooksStackNavigator, FilmsStackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            screenOptions={{ 
            drawerStyle: { backgroundColor: '#222831' },
            drawerActiveBackgroundColor: '#00ADB5',
            drawerActiveTintColor: '#EEEEEE',
            drawerInactiveTintColor: '#EEEEEE',
        }}>
            <Drawer.Screen name='Меню' component={TabNavigator} />
            <Drawer.Screen name='Книги' component={BooksStackNavigator} />
            <Drawer.Screen name='Фильмы' component={FilmsStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;