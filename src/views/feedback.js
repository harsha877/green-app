import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet,ScrollView,Dimensions,TouchableOpacity,SafeAreaView,Image, TextInput,Button, Alert
 } from 'react-native';
import Constants from 'expo-constants';
import TypeWriter from "react-native-typewriter";
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';


const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Yes',
    value: 'Y'
    }, {
    id: '2',
    label: 'No',
    value: 'N'
    }]

export default function FeedBack({ route, navigation }) {
    const [text, onChangeText] = React.useState("");
    const [defaultRating,setdefaultRating] = useState(0)
    const [maxRating,setmaxRating]= useState([1,2,3,4,5])
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
            
    

    const RadioButtn = () => {
      
       function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
      }
      return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
        />
    );

    }

  const UseTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UseTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('');

  
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderWidth: 1,
      }}>
      <UseTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 5}}
      />
    </View>
  );
}



    const CustomRatingBar = () => {
        return(
            <View style={styles.customRatingBarStyle}>
            {
              maxRating.map((item,key) => {
                return(
                  <TouchableOpacity
                  activeOpacity={0.7}
                  key={item}
                  onPress={() => setdefaultRating(item)}

                  >
                  <Image
                  style={styles.starImgStyle}
                  source={
                    item <= defaultRating
                    ? require("../../assets/star_filled.png")
                    : require("../../assets/star_corner.png")
                  }
                  />
                  </TouchableOpacity>
                )
              }

              )
            }
            </View>

        )
    }

    const data= [
      {
        "question": "Q1. How would you rate your overall experience?",
        "id": 1
      },
      {
        "question": "Q2. Was our App Useful?",
        "id":2
      },
      {
        "question": "Q3. Comments ",   
        "id":3 
      }
    ]

    const SubmitFeedBack = () =>{
        Alert.alert(
          "Feedback",
          "Your Feedback Submitted",
          [
        {
          text: "OK",
          onPress: () => navigation.goBack()
        }
      ]
        );

    }


    const FeedBackList = () => {
        return(
             <View style={styles.feedbackQuestionStyle}>
               {
                data.map((item,key) => {
                  return(
                    <TouchableOpacity key={key}>
                     <Text style={styles.Question}>
                       {item.question}
                     </Text>
                     {
                      item.id == 1
                     ?
                      <View>
                      <CustomRatingBar />  
                       <Text style={styles.textStyle}>
                        {defaultRating + '/' + maxRating.length}
                      </Text>
                      </View>
                     : 
                     item.id == 2
                     ?
                            <RadioButtn style={styles.radiostyle}/>
                     :
                            <UseTextInputMultiline/>                     
                     }
                  </TouchableOpacity>
                 
                  )
                   }
                )
        }
         </View>

     )
}

return (
  <SafeAreaView style={styles.container}>
  <ScrollView >
    <View style={styles.container}>
      <Text style={styles.text}>
              Rate App
      </Text>
      <FeedBackList/>
      
    </View>
    <View style={styles.subbutton}>
    <Button color={"#063f5c"}  title="Submit" onPress={SubmitFeedBack}  />
    </View>
  </ScrollView>
  </SafeAreaView>  
);

}






const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 2,
	},
	paragraph: {
		borderColor: "black",
		borderWidth: 1,
		margin: 30,
		marginBottom: 3,
		borderRadius: 25,
		height: 55,
		backgroundColor: "#003f69",
		fontSize: 18,
		textAlign: "center",
		paddingHorizontal: 30,
	},
  text: {
		color: "#000000",
		fontSize: 20,
		fontWeight: "600",
    marginTop: 20
	},
	typeWriter: {
		color: "#2471A3",
		fontSize: 25,
		margin: 15,
		fontWeight: "500",
		textAlign: "center",
	},
	questionNo: {
		color: "#2471A3",
		fontSize: 18,
		margin: 5,
	},
	Question: {
		fontSize: 20,
		margin: 5,
		fontWeight: "500",
	},
	top: {},
	bottom: {
		position: "absolute",
		width: Dimensions.get("screen").width,
		bottom: 10,
	},
	box: {
		backgroundColor: "#2471A3",
		height: 80,
		marginTop: 110,
	},
	bottomWavy: {
		position: "absolute",
		bottom: 20,
	},
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  feedbackQuestionStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  starImgStyle:{
    width: 40,
    height: 40,
    resizeMode: 'cover'
  },
  radiostyle:{
    justifyContent: 'center',
    flexDirection: 'column'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  subbutton: {
   
    fontsize: 30,
    margin:10,
    padding: 10,
    marginTop: 20,
		borderRadius: 50
   },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 20
  }
})
