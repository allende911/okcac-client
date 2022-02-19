import React from "react";
import { Header } from "semantic-ui-react";

const RenewalPrice = () => {
  const months = {
    1: 9,
    2: 6,
    3: 3,
    4: 36,
    5: 33,
    6: 30,
    7: 27,
    8: 24,
    9: 21,
    10: 18,
    11: 15,
    12: 12,
  };

  const d = new Date();
  const currentMonth = parseInt(d.getMonth() + 1);
  return <Header as="h4">Membership Price: ${months[currentMonth]}</Header>;
};

export default RenewalPrice;
