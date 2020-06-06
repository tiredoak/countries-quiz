import React from "react";
import { useState } from "react";

import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Help from "./components/Help";
import AnswerCard from "./components/AnswerCard";
import countries from "./data/countries";

const App = () => {
  const [game, setGame] = useState(false);
  const [index, setIndex] = useState(0);
  const [country, setCountry] = useState(countries[index]);
  const [userAnswer, setUserAnswer] = useState("");
  const [help, setHelp] = useState(false);

  // game logic isn't working yet

  const random = () => {
    return Math.floor(Math.random() * (countries.length - 0 + 1) + 0);
  };

  const next = () => {
    setUserAnswer("");
    setCountry(countries[random()]);
    setHelp(false);
  };

  const addHelp = () => {
    setHelp(true);
  };

  // setCountry(countries[Math.floor(Math.random() * (countries.length - 0 + 1) + 0)])
  // fran: having variables around vs having them in state what's best?

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
      <button onClick={next}>Next</button>
      <button onClick={addHelp}>Help</button>
      {help ? <Help index={index} countries={countries}></Help> : <p></p>}
    </div>
  );
};

export default App;
