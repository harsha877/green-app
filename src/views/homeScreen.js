import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TypeWriter from 'react-native-typewriter';
import Questions from '../json/questions.json';
import Option from '../components/options.js';
import CustumeButton from '../components/button';

export default function HomeScreen({route, navigation}) {
  const {index} = route.params;
  return (
    <ScrollView>
      <TypeWriter style={styles.typeWriter} typing={1}>
        Water Footprint Calculator
      </TypeWriter>
      <View style={styles.container}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
        <Text style={styles.Question}>
          {Questions.questions[index].question}
        </Text>
        {Questions.questions[index].answers.map(user => {
          let keys = Object.keys(user);
          return (
            <Text style={styles.paragraph}>
              {keys.map(key => {
                return (
                  <Option
                    value={`${key}`}
                    optionIdx={`${user[key]}`}
                    navigation={navigation}
                    qnIndex={index}
                  />
                );
              })}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  paragraph: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginBottom: 3,
    borderRadius: 20,
    // height: 65,
    padding: 20,
    backgroundColor: '#003f69',
    textAlign: 'center',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 18,
  },
  typeWriter: {
    color: '#409cd0',
    fontSize: 25,
    margin: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  questionNo: {
    color: '#409cd0',
    fontSize: 18,
    margin: 5,
  },
  Question: {
    fontSize: 18,
    margin: 5,
  },
});
