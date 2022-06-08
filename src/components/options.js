import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from '../json/questions.json';
import {useStateValue} from '../views/stateProvider';

const Option = props => {
  const [{score}, dispatch] = useStateValue();
  const updateScore = Score => {
    dispatch({
      type: 'UPDATE_SCORE',
      score: Score,
    });
  };
  console.log(score);
  let correctAnswerIdx = Questions.questions[props.qnIndex].correctIndex;
  return (
    <View style={[styles.Option]}>
      <TouchableOpacity
        onPress={() => {
          props.optionIdx === correctAnswerIdx
            ? updateScore(1)
            : updateScore(0);
          if (props.qnIndex + 1 != Questions.questions.length) {
            props.navigation.navigate('QuestionScreen', {
              index: props.qnIndex + 1,
            });
          }
        //   if (props.qnIndex + 1 >= Questions.questions.length) {
        //     console.log('End of Quiz');
        //     props.navigation.navigate('CongratsScreen');
        //   } else {
        //     props.navigation.navigate('QuestionScreen', {
        //       index: props.qnIndex + 1,
        //     });
        //   }
        }}>
        <Text style={styles.OptionText}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 20,
    marginBottom: 3,
    borderRadius: 20,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003f69',
  },
  OptionText: {
    fontSize: 20,
    color: 'white',
  },
});
