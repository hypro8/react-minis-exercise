import React from "react";
import SingleQuestion from "./Question";
import questions from "./data";

export default function Accordian() {
  console.log(questions);

  // !WRONG: functions can not be React children
  // const listQuestions = () => {
  //   questions.map((q) => <Question singleQuestion={q} />);
  // };

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
          questions.map((question) => ())
        </section>
      </div>
    </main>
  );
}
