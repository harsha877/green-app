import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomerHomeScreen from '../src/views/customerHomeScreen'

test("customer Home Screen Loading",()=>{
    const push = jest.fn();
   render(<CustomerHomeScreen navigation={{ push }} onSubmitHandler={()=>{}} user={{username:"sai",password:"123"}}/>)

})

test("customer HomeScreen snapshot",()=>{
    const push = jest.fn();
   let HomeComponenet=render(<CustomerHomeScreen navigation={{ push }} onSubmitHandler={()=>{}} user={{username:"sai",password:"123"}}/>).toJSON();
   expect(HomeComponenet).toMatchSnapshot();
})
describe("customer HomeScreen QueryTesting",()=>{
    const push = jest.fn();
    let HomeComponenet;
    beforeEach(()=>{
    HomeComponent=render(<CustomerHomeScreen navigation={{ push }} onSubmitHandler={()=>{}} user={{username:"sai",password:"123"}}/>);
    
    })

    test("Testing Title",()=>{
        const {getAllByText}=HomeComponent;
        expect(getAllByText("Customer Homepage").length).toBe(1);
     })
    
     test("Testing Text",()=>{
        const {getAllByText}=HomeComponent;
        expect(getAllByText("Create Quiz").length).toBe(1);
     })
     
     test("Testing Text",()=>{
        const {getAllByText}=HomeComponent;
        expect(getAllByText("View Quizzes").length).toBe(1);
     })
     
     test("Testing Text",()=>{
        const {getAllByText}=HomeComponent;
        expect(getAllByText("Log Out").length).toBe(1);
     })

     test("Testing Styles",()=>{
        const props=HomeComponent.toJSON();
        let CustomerTextStyles=props.children[0].props.style;
        expect(CustomerTextStyles).toStrictEqual({
            marginTop: 60,
            color: "#000000",
            fontSize: 20,
            fontWeight: "600",
        });
     })

     test("Testing Styles",()=>{
        const props=HomeComponent.toJSON();
        let CustomerButtonStyles=props.children[1].props.style;
        expect(CustomerButtonStyles).toStrictEqual({
            marginTop: 20,
            borderRadius: 50,
        });
     })
});


