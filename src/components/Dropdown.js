import * as React from 'react';
import {
  Controller,
} from 'react-hook-form';

export const Dropdown = (props) => {
  return (
    <>
    <Controller
    control={props.control}
    name={props.name}
    rules={props.rules}
    render={({field: {onChange, value}}) => {
    
      return (
      <select control={props.control} name={props.name} value={value} onChange={onChange}>
      {
        Object.entries(props.CurrencyList[0]).map(((curr, index) => {
          return (
            <option key={index} value={curr}>{curr[0]}{` `}  
              {curr[1]}
            </option>
          )
        })
        )
      }
    </select>
  )
    }}

    />
    </>
  )
}