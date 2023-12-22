import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HomeStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{ 
            tabBarStyle: { backgroundColor: '#222831' },
            tabBarActiveTintColor: '#00ADB5',
            tabBarInactiveTintColor: '#EEEEEE',
        }}>
            <Tab.Screen name="Главная" component={HomeScreen} options={{ headerShown: false, tabBarIcon: () => (<FontAwesome5 name="home" size={24} color="#EEEEEE" />) }} />
            <Tab.Screen name="Написать рецензию" component={ReviewScreen} options={{ headerShown: false, tabBarIcon: () => (<Entypo name="new-message" size={24} color="#EEEEEE" />) }} />
            <Tab.Screen name="Профиль" component={ProfileScreen} options={{ headerShown: false, tabBarIcon: () => (<MaterialIcons name="face" size={24} color="#EEEEEE" />) }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;