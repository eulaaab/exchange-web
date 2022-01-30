import * as React from "react";
import styled from "styled-components";

const ConversionContainer = styled.div`
  margin-top: 20px;
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

const ConversionHeader = styled.h1`
  align-self: self-start;
  padding-left: 10px;
`;

const FromContainer = styled.div`
  padding-left: 20px;

`;
const ToContainer = styled.div`
  padding-left: 20px;
  font-size: 20px;
`;

const RateContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`;

const RateWrapper = styled.div`
  padding-left: 20px;
`;

export const ConversionCard = (props) => {
  console.log("props", props);
  const { convertedAmount, conversion, rate } = props;
  return (
    <ConversionContainer>
      <ConversionHeader>Conversion</ConversionHeader>
      <FromContainer>
        <span>{formatMoney(23123.23)} </span>
        <span>USD =</span>
      </FromContainer>
      <ToContainer>
        <span>{formatMoney(95660909.991232)} </span>
        <span>CAD</span>
      </ToContainer>
      <RateContainer>
        <h4>Based On:</h4>
        <RateWrapper>
        <span>1 </span>
        <span>USD</span>
        <span> = </span>
        <span>CAD</span>
        <span> 1.28</span>
        </RateWrapper>
      </RateContainer>
    </ConversionContainer>
  );
};

const formatMoney = (val) => {
      var amount = val.toString().split(".");
      amount[0] = amount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return amount.join(".");
}
