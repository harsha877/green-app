import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Options from '../src/components/options';
import { useStateValue } from "../src/views/stateProvider"

jest.mock('../src/views/stateProvider', () => ({
    useStateValue: () => [0, {
        type: "UPDATE_SCORE",
        score: 1,
    }]
}));

var arr = { value: 1, key: 1, optionIdx: 1, navigation: { NavigationContainer }, qnIndex: 0 }
test("Options Component Loading", () => {
    render(<Options prop={arr} />)

})

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
            marginTop: 8, 
            textAlign: "center",
        });
    })

});