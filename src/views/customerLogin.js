import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { readCollectionDocument } from '../firebase/config';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import reducer from './reducer';
import { GREEN_DB_COLLECTION_CUSTOMER } from '../constant/constants';


export default function CustomerLogin({ onSubmit }) {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (username.length == 0) {
      alert("Invalid Username or empty");
      return;
    }
    if (password.length == 0) {
      alert("Invalid password or empty");
      return;
    }
    readCollectionDocument(GREEN_DB_COLLECTION_CUSTOMER, username).then(data => {

      if ((data !== undefined) && username == data.username && password == data.password) {
        flag = true;
        onSubmit(data);
        console.log('login successful');
      }
      else {
        alert('InCorrect Credentials');
      }
    })
      .catch((e) => console.log(e));
  }


  return (
    <View style={styles.container}>

      <Image source={require('../../assets/avatar.png')} />
      <TextInput
        style={styles.TextInput}
        placeholder="username"
        value={username}
        onChangeText={(username) => setusername(username)}
      />

      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />


      <Button style={styles.Button} onPress={handleLogin} title='LOGIN' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
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
    margin: 0,
    //width: 20,
    paddingTop: 5,
    color: 'red',
  },
  Button:
  {
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  }
});
