import React, { useState } from "react";
import data from "./data";

function LoremIpsum() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(count);
    console.log(typeof count); // this is string
    let amount = parseInt(count);
    console.log(typeof amount); // this is number
    if (amount < 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </article>
    </section>
  );
}

export default LoremIpsum;
