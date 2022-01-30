import React, {useState} from 'react';
import './App.css';
import {Input} from './components/Input'
import { Button } from './components/Button';
import {Dropdown} from './components/Dropdown'
import CurrencyList from './datasets/CurrencyList.json'
import {useForm} from 'react-hook-form';

const API_URL = 'https://open.exchangerate-api.com/v6/latest';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("");
  const [toCurr, setToCurr] = useState("");
  const {control, handleSubmit, errors, reset} = useForm();

async function fetchConversionRate (curr) {
  await fetch(API_URL)
    .then((res) => {
      //console.log("result", res.json());
      return res
    }).then((data) => {
      console.log('data', data)
    })
    .catch((err) => {
      console.log("err", err);
  });
}

async function findConversionRate(rates, rate){
  return  Object.entries(rates).find((val) => {
    if (val[0] === rate) {
      return val
    } else {
      return undefined;
    }
  });
}

const onSubmit = (handleSubmit(async (data) => {
  console.log('data', data);
  const {amount, to, from} = data;
  await fetchConversionRate(from);
  await findConversionRate(rates, to); //pass rates and to
}

))

  
  return (
    <div className="App">
      <p>
        Relay Currency Converter
      </p>
      <form  onSubmit={onSubmit}>
        <Input label="Amount" placeholder="Enter Amount" control={control} name="amount" id="amount"  />
        <Dropdown CurrencyList={CurrencyList} name="to" control={control}      
        />
        <Dropdown CurrencyList={CurrencyList} name="from" control={control}  
        
        />
        <Button type="submit" caption="Convert"/>
      </form>
     
    </div>
  );
}

export default App;
