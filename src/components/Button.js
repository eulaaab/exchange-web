import * as React from 'react';


export const Button = (props) => {
  return (
    <button className='btn' type={props.type}>{props.caption}</button>
  )
}

//1. Fetch API
//2. getConversionRate
//3. convertCurrency
