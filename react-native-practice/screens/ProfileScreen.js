import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
    const [userInfo] = useState({
        id: 1,
        login: 'Username',
        image: require('../images/profile.jpg'),
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Профиль</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.infoBlock}>
                    <Image source={userInfo.image} style={styles.image} />
                    <Text style={styles.login}>{userInfo.login}</Text>
                </View>
                <Text style={styles.statsTitle}>Ваши рецензии на книги</Text>
                <Text style={styles.statsText}>Раздел в разработке</Text>
                <Text style={styles.statsTitle}>Ваши рецензии на фильмы</Text>
                <Text style={styles.statsText}>Раздел в разработке</Text>
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
    infoBlock: {
        width: '100%',
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EEEEEE',
        marginLeft: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#393E46',
    },
    statsTitle: {
        fontSize: 18,
        color: '#EEEEEE',
        marginTop: 40,
    },
    statsText: {
        fontSize: 16,
        marginTop: 20,
        color: '#393E46',
    },
});

export default ProfileScreen;