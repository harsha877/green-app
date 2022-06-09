import React, { useState } from "react";
import { View, Text, Button, ScrollView, SafeAreaView ,StyleSheet} from 'react-native';
import CustomerLogin from "./customerLogin";
import QuizInput from "./QuizInput";
export default function Customer({navigation})
{
    const [user,setUser]=useState("");
    return(
        <View style={styles.container}>
         {user==""? <CustomerLogin setUser={setUser}/>:<QuizInput setUser={setUser}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:30
    }
});