import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CustumeButton from "../components/button";
import { USER_CUSTOM_QUIZ_HOMESCREEN, USER_CUSTOM_QUIZ_RESULTSCREEN } from "../constant/constants";

export default function QuestionScreen({ route, navigation }) {

    const [quiz, setQuiz] = useState(route.params.data[0]);
    const [currentquestion, setCurrentQuestion] = useState(quiz.questions[0]);
    const [currentquestionNumber, setCurrentquestionNumber] = useState(1);
    const [weights, setWeights] = useState([0]);
    const [score, SetScore] = useState(0);
    const [color, setColor] = useState(['white', 'white', 'white', 'white']);

    const ResultPage = () => {
        let sum = weights.reduce((pSum, element) => pSum + parseInt(element), 0);
        //console.log(sum);
        let result = ((sum / (4 * quiz.length)) * 100);
        console.log("user Scored: " + result + "%");
        navigation.navigate(USER_CUSTOM_QUIZ_RESULTSCREEN, { result });

    };

    const navigate = (flag) => {
        setColor(['white', 'white', 'white', 'white']);
        if (flag == 1) {
            setCurrentQuestion(quiz.questions[currentquestionNumber]);
            setCurrentquestionNumber(currentquestionNumber + 1);
            if (weights[currentquestionNumber] == undefined) {
                let tempWeights = weights;
                tempWeights.push(0);
                setWeights(tempWeights);
            }
            console.log(weights);
        } else {
            setCurrentQuestion(quiz.questions[currentquestionNumber - 2]);
            setCurrentquestionNumber(currentquestionNumber - 1);
            console.log(weights);
        }

    }

    const changeColor = (weight) => {
        if (weight == 1) {
            setColor(['green', 'white', 'white', 'white']);
        }else if(weight == 2){
            setColor(['white', 'green', 'white', 'white']);
        }else if(weight == 3){
            setColor(['white', 'white', 'green', 'white']);
        }else if(weight == 4){
            setColor(['white', 'white', 'white', 'green']);
        }
    }

    const optionWeight = (weight) => {

        changeColor(weight);
        let tempWeights = weights;
        tempWeights[currentquestionNumber - 1] = currentquestion.weight[weight - 1];
        setWeights(tempWeights);
        console.log(weights);

    }

    const previousButtonView = () => {

        if (currentquestionNumber != 1) {
            return (<CustumeButton name='Previous' onPressHandler={() => navigate(-1)} />);
        }

    }
    const nextButtonView = () => {

        if (currentquestionNumber != quiz.length) {
            return (<CustumeButton name='Next' onPressHandler={() => navigate(1)} />);
        }

    }
    const subitButtonView = () => {

        if (currentquestionNumber == quiz.length) {
            return (<CustumeButton name='Submit' onPressHandler={ResultPage} />);
        }

    }


    //console.log(quiz);

    return (
        <View>
            <View>
                <Text>
                    {currentquestionNumber}/{quiz.length}
                </Text>
                <Text>
                    {currentquestion.question}
                </Text>
            </View>
            <View>
                <View style={{ backgroundColor: color[0] , ...styles.options }}>
                    <CustumeButton name={currentquestion.option1} onPressHandler={() => optionWeight(1)} />
                </View>
                <View style={{ backgroundColor: color[1] , ...styles.options}}>
                    <CustumeButton name={currentquestion.option2} onPressHandler={() => optionWeight(2)} />
                </View>
                <View style={{ backgroundColor: color[2] , ...styles.options}}>
                    <CustumeButton name={currentquestion.option3} onPressHandler={() => optionWeight(3)} />
                </View>
                <View style={{ backgroundColor: color[3] , ...styles.options}}>
                    <CustumeButton name={currentquestion.option4} onPressHandler={() => optionWeight(4)} />
                </View>
            </View>

            <View style={styles.navigation}>
                {previousButtonView()}
                {nextButtonView()}
                {subitButtonView()}
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    options: {
        borderRadius: 20,
        margin: 0,
        padding: 0
    },
    navigation: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
})
