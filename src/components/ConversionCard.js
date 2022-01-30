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
      {convertedAmount && conversion && rate && (
        <React.Fragment>
          <FromContainer>
            <span>{formatMoney(conversion.amount)} </span>
            <span>{conversion.from} =</span>
          </FromContainer>
          <ToContainer>
            <span>{formatMoney(convertedAmount)} </span>
            <span>{conversion.to}</span>
          </ToContainer>
          <RateContainer>
            <h4>Based On:</h4>
            <RateWrapper>
              <span>1 </span>
              <span>{conversion.from}</span>
              <span> = </span>
              <span>{conversion.to}</span>
              <span> {rate}</span>
            </RateWrapper>
          </RateContainer>
        </React.Fragment>
      )}
    </ConversionContainer>
  );
};

const formatMoney = (val) => {
  var amount = val.toString().split(".");
  amount[0] = amount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return amount.join(".");
};
