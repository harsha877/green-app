import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { writeCollection } from '../firebase/config';
import { checkLenghtEqualToZero } from '../utils/utils';

export default function QuizInput({ setUser, navigation }) {
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  function handleNext() {
    var obj = { question, option1, option2, option3, option4 };
    if (checkLenghtEqualToZero(question) || checkLenghtEqualToZero(option1)
      || checkLenghtEqualToZero(option2) || checkLenghtEqualToZero(option3)
      || checkLenghtEqualToZero(option4)) {
      alert('Invalid Submission');
      return false;
    }
    data.push(obj);
    setData(data);
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    return true;
  }

  function handleSubmit() {
    if (handleNext() == false) {
      return;
    }
    var obj = { id };
    //data.unshift(obj);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      writeCollection(data[i], `${i}`, id)
        .then((response) => console.log(response)).catch((e) => console.log(e))
    }
    setFlag(false);
    alert("Quiz submission is successfull")
    navigation.navigate('customer login');

    // setData([]);
    // setUser("");
  }
  return (
    <View style={styles.container}>
      {flag == false ? <>
        <TextInput style={styles.TextInput} placeholder="Enter Quiz Name" value={id} onChangeText={(text) => setId(text)} />
        <Button style={styles.Button} onPress={() => setFlag(true)} title='Submit' />
      </> : <>
        <Text style={styles.text}>Post a Survey</Text>

        <TextInput style={styles.TextInput} placeholder="Question" value={question} onChangeText={(text) => setQuestion(text)} />
        <TextInput style={styles.TextInput} placeholder="option 1" value={option1} onChangeText={(text) => setOption1(text)} />
        <TextInput style={styles.TextInput} placeholder="option 2" value={option2} onChangeText={(text) => setOption2(text)} />
        <TextInput style={styles.TextInput} placeholder="option 3" value={option3} onChangeText={(text) => setOption3(text)} />
        <TextInput style={styles.TextInput} placeholder="option 4" value={option4} onChangeText={(text) => setOption4(text)} />
        <View style={styles.footer}>
          <View style={styles.Button}><Button onPress={handleNext} title='NEXT' color="green" /></View>
          <View style={styles.Button}><Button onPress={handleSubmit} title='Submit' color="#841584" /></View>
        </View>

        <Text style={{ marginTop: 20 }}> click on Next  for another question </Text>
        <Text> click on Submit to end the survey</Text>
      </>
      }
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },

  TextInput: {
    height: 40,
    margin: 15,
    width: 250,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    height: 40,
    margin: 15,
    width: 250,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
  },
  Button:
  {
    height: 40,
    paddingHorizontal: 15
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
  }
});