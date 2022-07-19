import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Row from '../src/components/row'

test("Row Component Loading",()=>{
    render(<Row row={{quizName:"waterQuiz",customerName:"mike"}} onPressHandler={()=>{}}/>)
 
 })
 
 test("Row component snapshot",()=>{
    let RowComponent=render(<Row row={{quizName:"waterQuiz",customerName:"mike"}} onPressHandler={()=>{}}/>).toJSON();
    expect(RowComponent).toMatchSnapshot();
 })