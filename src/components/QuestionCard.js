import React from "react";

const QuestionCard = (props) => {
  return (
    <div>
      <p>{props.country.name.common}</p>
    </div>
  );
};

export default QuestionCard;
