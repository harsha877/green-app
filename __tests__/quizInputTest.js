import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import QuizInput from '../src/views/quizInput';

var routes = { params: { index: 0 } }
test("Options Component Loading", () => {
    render(<QuizInput route={routes} navigation={NavigationContainer} />)

})

test("Option component snapshot", () => {
    let component = render(<QuizInput route={routes} navigation={NavigationContainer} />).toJSON();
    expect(component).toMatchSnapshot();
})

describe("Testing Option component", () => {
    let component;
    beforeEach(() => {
        component = render(<QuizInput route={routes} navigation={NavigationContainer} />).toJSON();

    })

    test("Testing Styles", () => {
        //const props = component.toJSON();
        console.log(JSON.stringify(component));
        let Styles = component.children[0].children[0].props.placeholder;
        //console.log(Styles);
        expect(Styles).toStrictEqual(
            "Enter Quiz Name"
        );
    })

    test("Testing Styles text", () => {
        //const props = component.toJSON();
        //console.log(props);
        let Styles = component.children[0].children[0].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            marginTop: 70,
            margin: 15,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            height: 40,
        });
    })
    test("Testing Styles text", () => {
        //const props = component.toJSON();
        //console.log(props);
        let Styles = component.children[0].children[1].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            opacity: 1,
        });
    })
    test("Testing Styles text", () => {
        //const props = component.toJSON();
        //console.log(props);
        let Styles = component.children[0].children[1].children[0].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            borderRadius: 20,
            backgroundColor: "#1ca3ec",
            paddingVertical: 10,
            paddingHorizontal: 10,
            margin: 4,
            borderColor: "black"

        });
    })
    test("Testing Styles text", () => {
        //const props = component.toJSON();
        //console.log(props);
        let Styles = component.children[0].children[1].children[0].children[0].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            color: "#ffffff",
            fontSize: 18,
            textAlign: "center",
            padding: 5,

        });
    })
    test("Testing Styles text", () => {
        //const props = component.toJSON();
        //console.log(props);
        let Styles = component.children[0].children[1].children[0].children[0].children[0];
        console.log(Styles);
        expect(Styles).toStrictEqual("Submit");
    })
});