import * as React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { writeCollection } from '../firebase/config';
import { checkLenghtEqualToZero } from '../utils/utils';
import { CUSTOM_QUESTION_HEAD_TAG, CUSTOM_QUESTION_NEXT_TAG, CUSTOM_QUESTION_SUBMIT_TAG, GREEN_DB_COLLECTION_QUIZES, QUESTION_TEMPLATE, QUIZ_TEMPLATE } from '../constant/constants';
import { Picker } from "@react-native-picker/picker";

import CustumeButton from "../components/button";

export default function QuizInput({ navigation, route }) {
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [priority, setPriority] = useState(['select', '1', '2', '3', '4']);
  const [newpriority, setNewPriority] = useState(['0', '0', '0', '0']);
  const [textBoxSize, setTextBoxSize] = useState(40);
  const [quizTemplate, setquizTemplate] = useState({});
  const [temp, setTemp] = useState("temp");


  //var quizTemplate = '';
  function priorityCheck() {

    return newpriority.reduce((partial, a) => partial + parseInt(a), 0)

  }

  function handleNext() {

    if (!(priorityCheck() == 10)) {
      alert("Invalid priority order");
      return false;
    }
    if (checkLenghtEqualToZero(question) || checkLenghtEqualToZero(option1)
      || checkLenghtEqualToZero(option2) || checkLenghtEqualToZero(option3)
      || checkLenghtEqualToZero(option4)) {
      alert('Invalid Submission');
      return false;
    }
    //generation of document
    assignQuestion();
    //setData(data);
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setNewPriority(['0', '0', '0', '0']);
    //console.log(quizTemplate);
    return true;
  }

  function assignQuestion() {

    let template = { ...QUESTION_TEMPLATE };
    template.question = question;
    template.option1 = option1;
    template.option2 = option2;
    template.option3 = option3;
    template.option4 = option4;
    template.weight = newpriority;
    let quizTemplateTemp = quizTemplate;
    quizTemplateTemp.questions.push(template);
    quizTemplateTemp.length = quizTemplateTemp.questions.length;
    setquizTemplate(quizTemplateTemp);
  }


  function handleSubmit() {
    if (handleNext() == false) {
      return;
    }
    var obj = { id };
    //data.unshift(obj);
    console.log(quizTemplate);

    writeCollection(quizTemplate, quizTemplate.quizName, GREEN_DB_COLLECTION_QUIZES)
      .then((response) => setquizTemplate({}))
      .catch((e) => console.log(e))

    setFlag(false);
    alert("Quiz submission is successfull")
    navigation.navigate('customer login');

    // setData([]);
    // setUser("");
  }

  const priorityChangeHandler = (item, question) => {
    let temPriority = newpriority, temPriority2;
    if (question == 'q1') {
      temPriority[0] = item;
    } else if (question == 'q2') {
      temPriority[1] = item;
    } else if (question == 'q3') {
      temPriority[2] = item;
    } else if (question == 'q4') {
      temPriority[3] = item;
    }
    setNewPriority(temPriority);
    setTemp(temp + " ")
  }
  const onSubmitQuizName = () => {
    if (checkLenghtEqualToZero(id)) {
      alert(" Name Canot be empty");
    } else {
      setFlag(true)
      let quizTemplateTemp = { ...QUIZ_TEMPLATE };
      quizTemplateTemp.quizName = id;
      quizTemplateTemp.customerID = route.params.user.username;
      quizTemplateTemp.customerName = route.params.user.name;
      quizTemplateTemp.searchKey = route.params.user.name +' | '+ id;
      quizTemplateTemp.questions = [];
      quizTemplateTemp.length = 0;
      setquizTemplate(quizTemplateTemp);
      //console.log(quizTemplateTemp);
    }

  }

  return (
    <ScrollView >
      {flag == false ? <>
        <TextInput style={{ ...styles.TextInput, height: textBoxSize }} placeholder="Enter Quiz Name" value={id}
          onChangeText={(text) => setId(text)}
          onContentSizeChange={(e) => setTextBoxSize(e.nativeEvent.contentSize.height)}
        />
        <CustumeButton style={styles.Button} onPressHandler={onSubmitQuizName} name='Submit' />
      </> : <>
        <Text style={styles.text}>{CUSTOM_QUESTION_HEAD_TAG}</Text>

        <TextInput multiline style={styles.TextInput} placeholder="Question" value={question} onChangeText={(text) => setQuestion(text)} />
        <TextInput style={styles.TextInput} placeholder="option 1" value={option1} onChangeText={(text) => setOption1(text)} />
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.label}>Weight</Text>
          <Picker onValueChange={(itemValue, itemIndex) => priorityChangeHandler(itemValue, 'q1')} style={styles.picker} selectedValue={newpriority[0]}>

            {priority.map(key => (
              <Picker.Item label={key} value={key} key={key} />
            ))}
          </Picker>
        </View>
        <TextInput style={styles.TextInput} placeholder="option 2" value={option2} onChangeText={(text) => setOption2(text)} />
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.label}>Weight</Text>
          <Picker onValueChange={(itemValue, itemIndex) => priorityChangeHandler(itemValue, 'q2')} style={styles.picker} selectedValue={newpriority[1]}>
            {priority.map(key => (
              <Picker.Item label={key} value={key} key={key} />
            ))}
          </Picker>
        </View>
        <TextInput style={styles.TextInput} placeholder="option 3" value={option3} onChangeText={(text) => setOption3(text)} />
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.label}>Weight</Text>
          <Picker onValueChange={(itemValue, itemIndex) => priorityChangeHandler(itemValue, 'q3')} style={styles.picker} selectedValue={newpriority[2]}>
            {priority.map(key => (
              <Picker.Item label={key} value={key} key={key} />
            ))}
          </Picker>
        </View>
        <TextInput style={styles.TextInput} placeholder="option 4" value={option4} onChangeText={(text) => setOption4(text)} />
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.label}>Weight</Text>
          <Picker onValueChange={(itemValue, itemIndex) => priorityChangeHandler(itemValue, 'q4')} style={styles.picker} selectedValue={newpriority[3]}>
            {priority.map(key => (
              <Picker.Item label={key} value={key} key={key} />
            ))}
          </Picker>
        </View>
        <View style={styles.footer}>
          <View style={styles.Button}><Button onPress={handleNext} title='NEXT' color="green" /></View>
          <View style={styles.Button}><Button onPress={handleSubmit} title='Submit' color="#841584" /></View>
        </View>

        <Text style={{ marginTop: 20 }}>{CUSTOM_QUESTION_NEXT_TAG}</Text>
        <Text> {CUSTOM_QUESTION_SUBMIT_TAG}</Text>
      </>
      }
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  button1: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 15
  },

  TextInput: {
    //height: 40,
    margin: 15,
    //width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  Button:
  {
    // height: 40,
    // width: 25,
    // marginTop: 5,
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

  label: {
    height: 40,
    margin: 15,
    padding: 10,
    margin: 10,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
  },
  picker: {
    width: 73,
    //padding: 10,
    borderWidth: 1,
    borderColor: "vlack",

  },
});