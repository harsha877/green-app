import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import WaterUsageScreen from '../src/views/waterUsageScreen';
import { useStateValue } from "../src/views/stateProvider"
import { TestWatcher } from 'jest';

jest.mock('../src/views/stateProvider', () => ({
    useStateValue: () => [0, {
        user: "UPDATE_SCORE",
        score: 1,
    }]
}));


var routes = { params: 0 }
test("Options Component Loading", () => {

    render(<WaterUsageScreen />)

})

test("Option component snapshot", () => {
    let component = render(<WaterUsageScreen />).toJSON();
    console.log(JSON.stringify(component));
    expect(component).toMatchSnapshot();
})


describe("Testing Option component", () => {
    let component;
    beforeEach(() => {
        component = render(<WaterUsageScreen />).toJSON();

    })

    test("Testing Styles first View", () => {

        let Styles = component.props.style;
        expect(Styles).toStrictEqual({
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        });
    })

    test("Testing Styles text", () => {
        let Styles = component.children[0].props.style;
        expect(Styles).toStrictEqual({
            position: "absolute",
            width: 750,
            top: 0
        });
    })



    test("Testing Styles text view", () => {
        let Styles = component.children[0].children[0].props.style;
        expect(Styles).toStrictEqual({
            backgroundColor: '#2471A3',
            height: 80

        });
    })

    test("Testing Styles text", () => {
        let Styles = component.children[0].props.style;
        expect(Styles).toStrictEqual({
            position: "absolute",
            width: 750,
            top: 0
        });
    })

    test("Testing Styles text view svg", () => {
        let Styles = component.children[0].children[0].children[0].props.style[0];
        expect(Styles).toStrictEqual({
            backgroundColor: "transparent",
            borderWidth: 0
        });
    })

    test("Testing Styles headerText", () => {
        let Styles = component.children[1].props.style;
        expect(Styles).toStrictEqual({
            color: "#2471A3",
            fontSize: 30,
            margin: 40,
            fontWeight: "500",
            textAlign: "center",
        });
    })

    test("Testing Styles resultText", () => {
        let Styles = component.children[2].props.style;
        expect(Styles).toStrictEqual({
            fontSize: 25,
            textAlign: "center",
            color: "#000000",
            fontWeight: "500",
        });
    })

    test("Testing resultText data", () => {
        let styles = component.children[2].children[0];
        styles = styles + component.children[2].children[1];
        expect(styles).toStrictEqual('Water Usage:  litres/day');
    })

    test("Testing static text data", () => {
        let styles = component.children[3].children[0];
        expect(styles).toStrictEqual('Canada Average Water Usage: 2432 litres/day');
    })

    test("Testing Styles bottum", () => {
        let Styles = component.children[4].props.style;
        expect(Styles).toStrictEqual({
            position: "absolute",
            width: 750,
            bottom: 0,
        });
    })
//children 4 can add more test cases if needed
});