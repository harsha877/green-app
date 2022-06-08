import * as React from 'react';
import { View, StyleSheet,Text,Image,TextInput,Button } from 'react-native';
import {useState} from 'react';
import {readCollection} from '../firebase/config';

export default function CustomerLogin({ navigation }) {
         const [email, setEmail] = useState("");
         const [password, setPassword] = useState("");
         const [status,setStatus]=useState("");
 
   function handleLogin(e)
   {
      e.preventDefault();
      readCollection('customers').then(
        (data)=>{
          flag=false;
          for(let i=0;i<data.length;i++)
          {
            if(email==data[i].userName && password==data[i].userPassword) flag=true;
          }
          if(flag) console.log('ok');
          else  setStatus('InCorrect Credentials');
        })
      .catch((e)=>console.log(e));
   }
  return (
    <View style={styles.container}>

      <Image source={require('../../assets/avatar.png')}/>
        <TextInput
        style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
        style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
       
       <Text style={styles.text}>{status}</Text>
        <Button style={styles.Button} onPress={handleLogin} title='LOGIN'/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:100
  },
 
  TextInput:  {
        height: 40,
        margin:15,
        width:250,
        borderWidth: 1,
        padding: 10,
      },

 text:{
  height: 40,
  margin:15,
  width:250,
  padding: 10,
 },
  Button:
  {
        height: 40,
        borderWidth: 1,
        marginTop:10,
        padding: 10,
  }
});
