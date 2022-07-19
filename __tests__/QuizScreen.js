import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import QuizScreen from '../src/views/quizScreen';

test("Quiz Screen Loading",()=>{
    const push = jest.fn();
   render(<QuizScreen navigation={{ push }}/>)

})

test("Quiz Screen snapshot",()=>{
    const push = jest.fn();
   let QuizComponent=render(<QuizScreen navigation={{ push }} />).toJSON();
   expect(QuizComponent).toMatchSnapshot();
})

describe("Quiz Screen QueryTesting",()=>{
    const push = jest.fn();
    let QuizComponent;
    beforeEach(()=>{
    QuizComponent=render(<QuizScreen navigation={{ push }} />);
    
    })

    test("Testing Button Text",()=>{
        const {getAllByText}=QuizComponent;
        expect(getAllByText("Refresh").length).toBe(1);
     })

     test("Testing Styles",()=>{
        const props=QuizComponent.toJSON();
        let NavigationStyles=props.children[0].props.style;
        expect(NavigationStyles).toStrictEqual({
            justifyContent: "space-between",
		    flexDirection: "row",
        });})

        test("Testing Styles",()=>{
            const props=QuizComponent.toJSON();
            let TextInputStyles=props.children[0].children[0].props.style;
            expect(TextInputStyles).toStrictEqual({
                margin: 10,
		        width: 230,
		        borderWidth: 1,
		        padding: 0,
		        borderRadius: 30,
		        paddingVertical: 10,
		        paddingHorizontal: 10,
		        alignSelf: "center",
            });}) 

    });