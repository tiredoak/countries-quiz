import React from "react";
import { useState } from "react";

import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Help from "./components/Help";
import AnswerCard from "./components/AnswerCard";
import countries from "./data/countries";

const App = () => {
  const [game, setGame] = useState(false);
  const [country, setCountry] = useState(countries[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [help, setHelp] = useState(false);
  const [index, setIndex] = useState(0);

  // game logic isn't working yet

  const random = () => {
    return Math.floor(Math.random() * (countries.length - 0 + 1) + 0);
  };

  const next = () => {
    setCountry(countries[index]);
    setUserAnswer("");
    setIndex(random());
  };

  // setCountry(countries[Math.floor(Math.random() * (countries.length - 0 + 1) + 0)])
  // fran: having variables around vs having them in state what's best?
  console.log(country);

  return !game ? (
    <div>
      <button
        onClick={() => {
          setGame(true);
        }}
      >
        Start game
      </button>
    </div>
  ) : (
    <div>
      <QuestionCard country={country}></QuestionCard>
      <AnswerCard
        country={country}
        userAnswer={userAnswer}
        setUserAnswer={setUserAnswer}
      ></AnswerCard>
      {userAnswer === country.capital[0] ? (
        <button onClick={next}>Next</button>
      ) : (
        <button disabled onClick={next}>
          Next
        </button>
      )}
      <button
        onClick={() => {
          setHelp(true);
        }}
      >
        Help
      </button>
      {help ? (
        <Help
          country={country}
          countries={countries}
          random={random}
          index={index}
        ></Help>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default App;
