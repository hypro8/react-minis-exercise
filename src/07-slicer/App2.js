import React, { useEffect, useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

function ReviewSlicerApp_2() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  console.log("people: ", people);
  console.log("index in func: ", index);

  // * 2 ways to enable the slicer to go looping:
  // * 1. only use useState Hook; 2. use UseEffect Hook (preferred).

  // * 2. use UseEffect Hook:
  // ! This is preferred method: useEffect tracks the change of index, no matter where it was changed.
  // ! Every time the value of index changes, it makes sure the values are within designed range.
  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);

  // ? additional functionality: automatic forward
  useEffect(() => {
    let timerID = setInterval(() => setIndex(index + 1), 1000);
    return () => clearInterval(timerID); // ! WRONG: return clearInterval(timerID) // remember to invoke the func.
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, job, text } = person;
          // add slicer here:
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            (index === 0 && personIndex === people.length - 1) ||
            personIndex === index - 1
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{job}</p>
              <p className="text">{text}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ReviewSlicerApp_2;
