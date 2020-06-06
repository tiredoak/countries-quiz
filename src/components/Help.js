import React from "react";
import countries from "../data/countries";

console.log(countries[3].capital[0]);

const Help = (props) => {
  return (
    <div>
      <p>{props.index}</p>
      <p>{countries[3].capital[0]}</p>
      <p>{countries[3].capital[0]}</p>
      <p>{countries[3].capital[0]}</p>
    </div>
  );
};

export default Help;
