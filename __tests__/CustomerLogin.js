import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CustomerLogin from '../src/views/customerLogin';

test("CustomerLogin Screen Loading",()=>{
   render(<CustomerLogin onSubmit={(data)=>{}}/>)

})

test("CustomerLogin Screen snapshot",()=>{
   let LoginComponent=render(<CustomerLogin onSubmit={(data)=>{}} />).toJSON();
   expect(LoginComponent).toMatchSnapshot();
})

describe("CustomerLogin Screen QueryTesting",()=>{
    let LoginComponent;
    beforeEach(()=>{
    LoginComponent=render(<CustomerLogin  onSubmit={(data)=>{}}/>);
    
    })
     
    test("Testing Button Text",()=>{
        const {getAllByText}=LoginComponent;
        expect(getAllByText("LOGIN").length).toBe(1);})

    test("Testing username placeholder",()=>{
        const {getByPlaceholderText}=LoginComponent;
        getByPlaceholderText("username")
     })

     test("Testing password placeholder",()=>{
        const {getByPlaceholderText}=LoginComponent;
        getByPlaceholderText("Password")
     })

     test("Testing Styles",()=>{
            const props=LoginComponent.toJSON();
            let containerStyles=props.children[0].children[1].props.style;
            expect(containerStyles).toStrictEqual({
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 80,
            });})

     test("Testing Styles",()=>{
        const props=LoginComponent.toJSON();
        let TextInputStyles=props.children[0].children[1].children[1].props.style;
        expect(TextInputStyles).toStrictEqual({
        height: 40,
		margin: 15,
		width: 300,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
        });}) 


    test("Testing box Styles",()=>{
        const props=LoginComponent.toJSON();
        let boxStyles=props.children[0].children[2].children[0].props.style;
        expect(boxStyles).toStrictEqual({
                    backgroundColor: "#2471A3",
                    height: 80,
                    marginTop: 150,
                });})
    });