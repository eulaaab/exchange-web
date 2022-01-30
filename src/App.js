import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styled from "styled-components";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Dropdown } from "./components/Dropdown";
import CurrencyList from "./datasets/CurrencyList.json";
import { useForm } from "react-hook-form";
import { ConversionCard } from "./components/ConversionCard";
import Relay from "./assets/relay.jpg";

const API_URL = "https://open.exchangerate-api.com/v6/latest";

const LogoContainer = styled.div`
  width: 30%;
  margin: auto;
`;
const Logo = styled.img`
  flex-shrink: 1;
  width: 100%;
  height: 100%;
`;

const ConverterContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1);
  }
`;

const CurrencyContainer = styled.div`
  display: flex;
  margin: 10px 0px;
`;

function App() {
  const [amount, setAmount] = useState(null);
  const [conversion, setConversion] = useState(null);
  const [conversionRates, setConversionRates] = useState(undefined);
  const [rate, setRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState();
  const { control, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      amount: "",
      to: "CAD",
      from: "USD",
    },
  });

  // useEffect(() => {
  //   findConversionRate();
  // },[amount,fromCurr, toCurr,conversionRates,rate, convertedAmount])

  useEffect(() => {
    if (conversion && conversionRates && rate) {
      setAmount(conversion.amount);
    }
  });

  async function fetchConversionRate(curr) {
    await fetch(API_URL + `/` + curr)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setConversionRates(data.rates);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  async function findConversionRate(rates, rate) {
    if (rates !== undefined) {
      return Object.entries(rates).find((val) => {
        if (val[0] === rate) {
          setRate(val[1]);
          return val;
        } else {
          setRate(undefined);
        }
      });
    } else {
      return null;
    }
  }

  const getConversion = (amount, rate) => {
    const converted = amount * rate;
    setConvertedAmount(converted);
  };

  const onSubmit = handleSubmit(async (data) => {
    await setConversion(data);
    await fetchConversionRate(data.from);
    await findConversionRate(conversionRates, data.to);
    const res2 = await getConversion(data.amount, rate);
    //setRate(res[1])
    //console.log('result', rate);
    // await getConversion(123.23, rate)
    // await fetchConversionRate(from);
    // await findConversionRate(conversionRates, to);
    // await getConversion(amount, rate)
  });

  console.log("amount", amount);
  console.log("conversion", conversion);
  console.log("conversionRates", conversionRates);
  console.log("rate", rate);
  console.log("convertedAmount", convertedAmount);

  return (
    <div className="App">
      <LogoContainer>
        <Logo src={Relay}></Logo>
      </LogoContainer>
      <form onSubmit={onSubmit}>
        <ConverterContainer>
          <Input
            label="Amount"
            placeholder="Enter Amount"
            control={control}
            name="amount"
            id="amount"
            rules={{ required: true }}
          />
          <CurrencyContainer>
            <Dropdown
              CurrencyList={CurrencyList}
              name="to"
              control={control}
              rules={{ required: true }}
            />
            <Dropdown
              CurrencyList={CurrencyList}
              name="from"
              control={control}
              rules={{ required: true }}
            />
          </CurrencyContainer>
          <Button type="submit" caption="Convert" />
        </ConverterContainer>
        {rate && conversion && amount && (
          <ConversionCard
            convertedAmount={convertedAmount}
            conversion={conversion}
            rate={rate}
          />
        )}
      </form>
    </div>
  );
}

export default App;
