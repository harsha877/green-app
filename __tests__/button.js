import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustumeButton from '../src/components/button'

test("Button Component Loading",()=>{
    render(<CustumeButton name="welcome" onPressHandler={()=>{}} type="button" colorsuper = "#1ca3ec"/>)
 
 })
 
 test("Button component snapshot",()=>{
    let ButtonComponent=render(<CustumeButton name="welcome" onPressHandler={()=>{}} type="button" colorsuper = "#1ca3ec"/>).toJSON();
    expect(ButtonComponent).toMatchSnapshot();
 })

describe("Testing Button component",()=>{
    let ButtonComponent;
    beforeEach(()=>{
    ButtonComponent=render(<CustumeButton name="welcome" onPressHandler={()=>{}} type="button"  colorsuper = "#1ca3ec"/>);
    
    })
    
    test("Testing Styles",()=>{
        const props=ButtonComponent.toJSON();
        let Styles=props.children[0].props.style;
        expect(Styles).toStrictEqual({
            padding: 0,
            borderRadius: 50,
            backgroundColor: "#1ca3ec",
            paddingVertical: 10,
            paddingHorizontal: 10,
            margin: 10,
            width: 125,
            alignSelf: "center",
        });})
        
        test("Testing Button Text",()=>{
            const {getAllByText}=ButtonComponent;
            expect(getAllByText("welcome").length).toBe(1);})

        test("Testing Styles",()=>{
            const props=ButtonComponent.toJSON();
            let Styles=props.children[0].children[0].props.style;
            expect(Styles).toStrictEqual({
                color: "#ffffff",
                fontSize: 18,
                textAlign: "center",
                padding: 5,
            });})
   
});

describe("Testing Button component with type = list",()=>{
    let ButtonComponent;
    beforeEach(()=>{
    ButtonComponent=render(<CustumeButton name="click" onPressHandler={()=>{}} type="list"  colorsuper = "#1ca3ec"/>);
    
    })
    
    test("Testing Styles",()=>{
        const props=ButtonComponent.toJSON();
        let Styles=props.children[0].props.style;
        expect(Styles).toStrictEqual({
            borderRadius: 20,
            backgroundColor: "#1ca3ec",
            paddingVertical: 10,
            paddingHorizontal: 10,
            margin: 4,
            borderColor: "black",
        });})
        
        test("Testing Button Text",()=>{
            const {getAllByText}=ButtonComponent;
            expect(getAllByText("click").length).toBe(1);})

        test("Testing Styles",()=>{
            const props=ButtonComponent.toJSON();
            let Styles=props.children[0].children[0].props.style;
            expect(Styles).toStrictEqual({
                color: "#ffffff",
                fontSize: 18,
                textAlign: "center",
                padding: 5,
            });})
   
});