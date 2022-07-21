import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/views/homeScreen';
import { useStateValue } from "../src/views/stateProvider"
import { TestWatcher } from 'jest';

jest.mock('../src/views/stateProvider', () => ({
    useStateValue: () => [0, {
        type: "UPDATE_SCORE",
        score: 1,
    }]
}));

var routes = { params: { index: 0 } }
test("Component Loading", () => {
    render(<HomeScreen route={routes} navigation={NavigationContainer} />)

})


test("component snapshot", () => {
    let component = render(<HomeScreen route={routes} navigation={NavigationContainer} />).toJSON();
    //console.log(JSON.stringify(component))
    expect(component).toMatchSnapshot();
})


describe("Testing component", () => {
    var component;
    beforeEach(() => {
        component = render(<HomeScreen route={routes} navigation={NavigationContainer} />);

    })

    test("Testing Styles", () => {
        const homescreen = component.toJSON();
        //console.log(JSON.stringify(props));
        let Styles = homescreen.children[0].children[0].props.style;
        //console.log(Styles);
        expect(Styles).toStrictEqual({
            color: "#2471A3",
            fontSize: 25,
            marginTop: 40,
            fontWeight: "500",
            textAlign: "center",
        });
    })

    test("Testing Styles text", () => {
        const props = component.toJSON();
        //console.log(props);
        let Styles = props.children[0].children[1].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#ecf0f1",
            padding: 2,
            marginTop: 20,
        });
    })

    test("Testing options", () => {
        const props = component.toJSON();
        //console.log(props);
        let Styles = props.children[0].children[1].children[0].props.style;
        //console.log(Styles);
        expect(Styles).toStrictEqual({
            color: "#2471A3",
            fontSize: 18,
            margin: 5
        });
    })

    test("Testing HomeScreen", () => {
        const props = component.toJSON();
        let data = props.children[0].children[1].children[0].children[0];
        data = data + props.children[0].children[1].children[0].children[1];
        data = data + props.children[0].children[1].children[0].children[2];
        expect(data).toStrictEqual("1/10");
    })
    test("Testing HomeScreen", () => {
        const props = component.toJSON();
        let data = props.children[0].children[1].children[1].props.style;

        expect(data).toStrictEqual({
            fontSize: 20,
            margin: 5,
            fontWeight: "500",
        });
    })

    test("Testing HomeScreen", () => {
        const props = component.toJSON();
        let data = props.children[0].children[1].children[1].children[0];
        expect(data).toStrictEqual("How long is the average shower in your household?");
    })

    test("Testing Styles", () => {
        const homescreen = component.toJSON();
        //console.log(JSON.stringify(props));
        let Styles = homescreen.children[0].children[1].children[5].props.style;
        //console.log(Styles);
        expect(Styles).toStrictEqual({
            borderColor: "black",
            borderWidth: 1,
            margin: 30,
            marginBottom: 3,
            borderRadius: 25,
            height: 60,
            backgroundColor: "#003f69",
            fontSize: 18,
            textAlign: "center",
            paddingHorizontal: 30,
            opacity: 1,
        });
    })

    test("Testing Styles", () => {
        const homescreen = component.toJSON();
        //console.log(JSON.stringify(props));
        let Styles = homescreen.children[0].children[2].children[0].props.style;
        //console.log(Styles);
        expect(Styles).toStrictEqual({
            backgroundColor: "#2471A3",
            height: 80,
            marginTop: 250

        });
    })
}); 