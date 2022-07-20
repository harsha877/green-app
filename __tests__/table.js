import React from 'react';
import { render} from '@testing-library/react-native';
import Table from '../src/components/table'

test("Table Component Loading",()=>{
    render(<Table data ={{}} onPressHandler={()=>{}}/>)
 
 })
 
 test("Table component snapshot",()=>{
    let TableComponent=render(<Table data ={{}} onPressHandler={()=>{}}/>).toJSON();
    expect(TableComponent).toMatchSnapshot();
 })

 