import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import useFetch from "../utils/useFetch";

const RenewalPrice = () => {
  const [price, setPrice] = useState(0);
  const { get, loading } = useFetch("https://okcac-strapi.herokuapp.com/api/");

  useEffect(() => {
    get("site-setting?[fields]=membershipPrice")
      .then((data) => setPrice(data.data.attributes.membershipPrice))
      .then((error) => console.log(error));
  }, []);

  const d = new Date();
  const currentMonth = parseInt(d.getMonth() + 1);

  if (currentMonth >= 4) {
    return <Loader /> && price - (currentMonth - 4) * 3;
  } else if (currentMonth <= 3) {
    return <Loader /> && price - (currentMonth + 8) * 3;
  } else return <Loader /> && price;
};

export default RenewalPrice;
