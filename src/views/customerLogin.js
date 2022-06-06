import * as React from 'react';
import { View, Text } from 'react-native';
// import bottomNav from './styles/bottomNav';

export default function CustomerLogin({ navigation }) {
    return (
        const [email, setEmail] = useState("");
         const [password, setPassword] = useState("");
 
   function handleLogin(e)
   {
      e.preventDefault();
      console.log(email);
      console.log(password);
   }
  return (
    <View style={styles.container}>

      <Image source={require('../assets/avatar.png')}/>
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
    marginTop:200
  },
 
  TextInput:  {
        height: 40,
        margin:15,
        width:250,
        borderWidth: 1,
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
