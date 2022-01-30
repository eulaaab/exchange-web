import * as React from 'react';
import {
  Controller,
} from 'react-hook-form';

export const Input = (props) => {
  return (
    <React.Fragment>
      <Controller 
  control={props.control}
  name={props.name}
  rules={props.rules}
  defaultValue=""
    render={({field: {onChange, value}}) => {
    return (
      <React.Fragment>
      <label htmlFor="label">{props.label}</label>
      <input placeholder={props.placeholder} id={props.id} name={props.name} value={value} onChange={onChange}/>
      </React.Fragment>
    )
  }}
      />
    </React.Fragment>
      
  )
}