import React, { useState } from "react";

const Help = (props) => {
  return (
    <div>
      <p>{props.country.capital[props.index]}</p>
      <p>{props.countries[props.random()].capital[0]}</p>
      <p>{props.countries[props.random()].capital[0]}</p>
      <p>{props.countries[props.random()].capital[0]}</p>
    </div>
  );
};
export default Help;
