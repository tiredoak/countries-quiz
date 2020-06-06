// fran: pq n posso importar os dois ao mesmo tempo?
import React, { useState } from "react";

const AnswerCard = (props) => {
  const gradeAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer ? "Correct!" : "Incorrect :(";
  };

  return (
    <div>
      <div>
        <label>Please specify:</label>
        <input
          value={props.userAnswer}
          onChange={(e) => props.setUserAnswer(e.target.value)}
        />
      </div>
      <div>
        <p>{gradeAnswer(props.userAnswer, props.country.capital[0])}</p>
      </div>
    </div>
  );
};

export default AnswerCard;
