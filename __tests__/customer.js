import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Customer from '../src/views/customer';

test("Customer Screen Loading",()=>{
    const push = jest.fn();
   render(<Customer navigation={{ push }} />)

})

test("Customer Screen snapshot",()=>{
    const push = jest.fn();
   let CustomerComponent=render(<Customer navigation={{ push }} />).toJSON();
   expect(CustomerComponent).toMatchSnapshot();
})

describe("Customer Screen QueryTesting",()=>{
    const push = jest.fn();
    let CustomerComponent;
    beforeEach(()=>{
    CustomerComponent=render(<Customer navigation={{ push }}/>);
    })

    test("Testing Styles",()=>{
        const props=CustomerComponent.toJSON();
        let containerStyles=props.props.style;
        expect(containerStyles).toStrictEqual({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30
        });})

});