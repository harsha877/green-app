import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/views/homeScreen';
import { useStateValue } from "../src/views/stateProvider"
import { TestWatcher } from 'jest';

test("test", () => {})
/*
var routes = { params: 0}
test("Options Component Loading", () => {
    Questions = jest.mock('src/json/questions.json', () => (
        {
            "questions": [
                {
                    "question": "How long is the average shower in your household?",
                    "type": "HouseHold",
                    "answers": [
                        { "Under 5 min": 200 },
                        { "5-10 min": 300 },
                        { "11-15 min": 400 },
                        { "Over 15 min": 500 }
                    ]
                },]
        }
        
    ), { virtual: true })

    render(<HomeScreen route= {routes}  navigation ={NavigationContainer} />)

})

/*
test("Option component snapshot", () => {
    let component = render(<Options prop={arr} />).toJSON();
    expect(component).toMatchSnapshot();
})


describe("Testing Option component", () => {
    let component;
    beforeEach(() => {
        component = render(<Options prop={arr} />);

    })

    test("Testing Styles", () => {
        const props = component.toJSON();
        //console.log(props);
        let Styles = props.children[0].props.style;
        //console.log(Styles);
        expect(Styles).toStrictEqual({
            opacity: 1,
        });
    })

    test("Testing Styles text", () => {
        const props = component.toJSON();
        //console.log(props);
        let Styles = props.children[0].children[0].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            fontSize: 20,
            color: "white",
            textAlign: "center",
        });
    })

});*/