import * as React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import '../App.css';

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1 1 0;
  padding: 5px 10px;
`

export const Input = (props) => {
  const { control, name, rules, label, placeholder, id } = props;
  return (
    <React.Fragment>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue=""
        render={({ field: { onChange, value } }) => {
          return (
            <InputContainer>
              <label htmlFor={label} className="label">{label}</label>
              <input
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
              />
            </InputContainer>
          );
        }}
      />
    </React.Fragment>
  );
};
