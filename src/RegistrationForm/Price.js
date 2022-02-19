import React from "react";
import { Header } from "semantic-ui-react";
import PriceModal from "./PriceModal";

const Price = (props) => {
  return (
    <Header as="h4" textAlign="center">
      Your current total is ${props.price}.
      <PriceModal />
    </Header>
  );
};

export default Price;
