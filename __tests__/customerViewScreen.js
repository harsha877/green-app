import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CustomerViewScreen from '../src/views/customerViewScreen'

const push = jest.fn();
const route = { params: { isAccesibilityModeOn: false } }

test("customer view Screen Loading", () => {
    render(<CustomerViewScreen navigation={{ push }} route={route} />)

})

test("customer view Screen snapshot", () => {
    let customerViewComponenet = render(<CustomerViewScreen navigation={{ push }} route={route} />).toJSON();
    expect(customerViewComponenet).toMatchSnapshot();
})
describe("customer view Screen Query Testing", () => {
    let customerViewComponent;
    beforeEach(() => {
        customerViewComponent = render(<CustomerViewScreen navigation={{ push }} route={route} />);

    })

    /*test("Testing Title", () => {
        const { getAllByText } = customerViewComponent;
        expect(getAllByText("Customer View page").length).toBe(1);
    })*/

    test("Testing Button Text", () => {
        const { getAllByText } = customerViewComponent;
        expect(getAllByText("Refresh").length).toBe(1);
    })

    test("Testing text Styles", () => {
        const props = customerViewComponent.toJSON();
        console.log(props);
        let Styles = props.children[0].children[0].props.style;
        expect(Styles).toStrictEqual({
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        });
    })

    test("Testing list Styles", () => {
        const props = customerViewComponent.toJSON();
        let Styles = props.children[0].children[1].props.style;
        expect(Styles).toStrictEqual({
            justifyContent: "space-between",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        });
    })

    /*test("Testing text input Styles",()=>{
        const props=customerViewComponent.toJSON();
        let Styles=props.children[0].children[1].children[0].props.style;
        expect(Styles).toStrictEqual({
            margin: 15,
            width: 280,
            borderWidth: 1,
            padding: 0,
            borderRadius: 30,
            paddingVertical: 10,
            paddingHorizontal: 10,
            margin: 20,
            alignSelf: "center",
        });
    })*/

    /*test("Testing list Styles",()=>{
         const props=customerViewComponent.toJSON();
        let Styles=props.children[0].children[2].props.style;
        expect(Styles).toStrictEqual({
            justifyContent: "space-between",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            });
     })*/

});