import * as React from "react";
import { Controller } from "react-hook-form";

export const Dropdown = (props) => {
  const { control, name, rules, CurrencyList } = props;
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="row mb-3 container-sm">
              <select
                control={control}
                name={name}
                value={value}
                onChange={onChange}
                className="form-select"
                aria-label="Default select example"
              >
                {CurrencyList.map((currency, index) => {
                  return (
                    <option key={index} value={currency.cc}>
                      {currency.symbol}
                      {` - `}
                      {currency.cc}
                      {` - `}
                      {currency.name}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        }}
      />
    </>
  );
};
