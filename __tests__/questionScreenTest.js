import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import WaterUsageScreen from '../src/views/questionScreen';

import { TestWatcher } from 'jest';

var route = { params: { data: [{ questions: ["tr"] }] } }
test("render test for question screen", () => {
    render(<WaterUsageScreen route={route} navigation={NavigationContainer} />)

})

test("question screen component snapshot", () => {
    let component = render(<WaterUsageScreen route={route} navigation={NavigationContainer} />).toJSON();
    expect(component).toMatchSnapshot();
})

describe("question screen Testing Option component", () => {
    let component;
    beforeEach(() => {
        component = render(<WaterUsageScreen route={route} navigation={NavigationContainer} />);

    })

    test("Testing Styles", () => {
        const props = component.toJSON();

        let Styles = props.children[0].children[0].props.style;

        expect(Styles).toStrictEqual({
            color: "#003f69",
            fontSize: 18,
            margin: 5
        });
    })

    test("Testing Styles text", () => {
        const props = component.toJSON();
        //console.log(props);
        let Styles = props.children[0].children[1].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            fontSize: 20,
            margin: 5,
            fontWeight: "500",
            textAlign: "center",
        })
    })

    test("Testing Styles option1", () => {
            const props = component.toJSON();

            let Styles = props.children[1].children[0].props.style;

            expect(Styles).toStrictEqual({
                margin: 0,
                padding: 0,
                margin: 30,
                marginBottom: 3,
                borderRadius: 25,
                backgroundColor: "#42bff5",
                fontSize: 18,
                textAlign: "center",
            });
        });
        test("Testing Styles option2", () => {
            const props = component.toJSON();

            let Styles = props.children[1].children[1].props.style;

            expect(Styles).toStrictEqual({
                margin: 0,
                padding: 0,
                margin: 30,
                marginBottom: 3,
                borderRadius: 25,
                backgroundColor: "#42bff5",
                fontSize: 18,
                textAlign: "center",
            });
        });
        test("Testing Styles option3", () => {
            const props = component.toJSON();

            let Styles = props.children[1].children[2].props.style;

            expect(Styles).toStrictEqual({
                margin: 0,
                padding: 0,
                margin: 30,
                marginBottom: 3,
                borderRadius: 25,
                backgroundColor: "#42bff5",
                fontSize: 18,
                textAlign: "center",
            });
        });
        test("Testing Styles option4", () => {
            const props = component.toJSON();

            let Styles = props.children[1].children[3].props.style;

            expect(Styles).toStrictEqual({
                margin: 0,
                padding: 0,
                margin: 30,
                marginBottom: 3,
                borderRadius: 25,
                backgroundColor: "#42bff5",
                fontSize: 18,
                textAlign: "center",
            });
        });
        test("Testing Styles navigation", () => {
            const props = component.toJSON();

            let Styles = props.children[2].props.style;

            expect(Styles).toStrictEqual({
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
            });
        });
});