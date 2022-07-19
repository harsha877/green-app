import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import ResultScreen from '../src/views/resultsScreen';

const push = jest.fn();
const route={params:{result:90,isAccesibilityModeOn:false}}

test("result Screen Loading",()=>{
   render(< ResultScreen route={route} navigation={{ push }}/>)

})

test("result Screen snapshot",()=>{
   let resultComponenet=render(<ResultScreen route={route} navigation={{ push }}/>).toJSON();
   expect(resultComponenet).toMatchSnapshot();
})
describe(" result Screen QueryTesting",()=>{
    let resultComponent;
    beforeEach(()=>{
    resultComponent=render(<ResultScreen route={route} navigation={{ push }}/>);
    })

    
     test("Testing Text",()=>{
       const {getAllByText}=resultComponent;
        text="Congrats you Scored 90%";
        expect(getAllByText(text).length).toBe(1);
     })

     test("Testing Text",()=>{
      const {getAllByText}=resultComponent;
       text="Home";
       expect(getAllByText(text).length).toBe(1);
    })
     
     
     test("Testing Styles",()=>{
        const props=resultComponent.toJSON();
        let Styles=props.props.style;
        expect(Styles).toStrictEqual({
         flex: 1,
         justifyContent: "center",
         backgroundColor: "#063f5c",
         padding: 2,
        });
     })

     test("Testing Styles",()=>{
      const props=resultComponent.toJSON();
      let Styles=props.children[1].props.style;
      expect(Styles).toStrictEqual({
         color: "#ffffff",
         fontSize: 21,
         margin: 5,
         textAlign: "center",
      });
   })
     
});
