import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function ColorGenerator() {
  const range = 10;
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(range));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(range);
      setList(colors);
      console.log("handleSbmit. <<>> Colors: ", colors);
      console.log("handleSbmit. <<>> List: ", list);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/* <h4>this is color section</h4> */}
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default ColorGenerator;
