import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ReviewScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Написать рецензию</Text>
            </View>
            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder="Пока не работает :'("
                    placeholderTextColor='#393E46'
                    editable={false}
                />
                <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Написать</Text></TouchableOpacity>
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
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#00ADB5',
    borderRadius: 4,
    padding: 8,
    color: '#EEEEEE',
    fontSize: 18,
  },
  button: {
    width: '60%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ADB5',
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 60,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
});

export default ReviewScreen;