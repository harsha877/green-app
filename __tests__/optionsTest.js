import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Options from '../src/components/options';
import { useStateValue } from "../src/views/stateProvider"

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
        console.log(props);
        let Styles = props.children[0].children[0].props.style;
        console.log(Styles);
        expect(Styles).toStrictEqual({
            fontSize: 20,
            color: "white",
            textAlign: "center",
        });
    })

    /*
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
        });})*/



});