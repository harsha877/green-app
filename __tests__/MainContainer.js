import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainContainer from '../src/routes/mainContainer';

test("Main Container Loading",()=>{
    render(<MainContainer/>)
})
test('Main Container snapShot',()=>{
    let mainContainer=render(<MainContainer/>).toJSON();
    expect(mainContainer).toMatchSnapshot();
})
