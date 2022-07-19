import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import OptionButton from '../src/components/optionButton'

test("Option Button Component Loading",()=>{
    render(<OptionButton name="welcome" onPressHandler={()=>{}} type="button" data={{}}/>)
 
 })
 
 test("Option Button component snapshot",()=>{
    let ButtonComponent=render(<OptionButton name="welcome" onPressHandler={()=>{}} type="button" data={{}}/>).toJSON();
    expect(ButtonComponent).toMatchSnapshot();
 })

describe("Testing Button component",()=>{
    let ButtonComponent;
    beforeEach(()=>{
    ButtonComponent=render(<OptionButton name="welcome" onPressHandler={()=>{}} type="button"  data={{}}/>);
    
    })
    
    test("Testing Styles",()=>{
        const props=ButtonComponent.toJSON();
        let Styles=props.children[0].props.style;
        expect(Styles).toStrictEqual({
            padding: 0,
		    borderRadius: 50,
		    backgroundColor: "#003f69",
		    paddingVertical: 10,
		    paddingHorizontal: 10,
		    margin: 10,
		    width: 125,
		    height: 65,
		    alignSelf: "center",
        });})
        
        test("Testing Button Text",()=>{
            const {getAllByText}=ButtonComponent;
            expect(getAllByText("welcome").length).toBe(1);})

        test("Testing Styles",()=>{
            const props=ButtonComponent.toJSON();
            let Styles=props.children[0].children[0].props.style;
            expect(Styles).toStrictEqual({
                color: "white",
		        fontSize: 16,
		        textAlign: "center",
            });})
   
});

describe("Testing Button component with type = list",()=>{
    let ButtonComponent;
    beforeEach(()=>{
    ButtonComponent=render(<OptionButton name="click" onPressHandler={()=>{}} type="list"  data={{}}/>);
    
    })
    
    test("Testing Styles",()=>{
        const props=ButtonComponent.toJSON();
        let Styles=props.children[0].props.style;
        expect(Styles).toStrictEqual({
            borderRadius: 10,
		    backgroundColor: "#003f69",
		    paddingVertical: 10,
		    paddingHorizontal: 10,
		    margin: 10,
		    height: 65,
		    borderColor: "black",
        });})
        
        test("Testing Button Text",()=>{
            const {getAllByText}=ButtonComponent;
            expect(getAllByText("click").length).toBe(1);})

        test("Testing Styles",()=>{
            const props=ButtonComponent.toJSON();
            let Styles=props.children[0].children[0].props.style;
            expect(Styles).toStrictEqual({
                color: "white",
		        fontSize: 16,
		        textAlign: "center",
            });})
   
});