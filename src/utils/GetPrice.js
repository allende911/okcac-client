import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

const GetPrice = () => {
  const { get, loading } = useFetch("https://okcacstrapi.herokuapp.com/api");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    get("site-setting?[fields]=membershipPrice")
      .then((data) => setPrice(data.data.attributes.membershipPrice))
      .then((error) => console.log(error));
  }, []);

  return { price };
};

export default GetPrice;
