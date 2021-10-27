import React, { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

function ReviewSlicerApp() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  console.log("people: ", people);
  console.log("index in func: ", index);

  // * 2 ways to enable the slicer to go looping:
  // * 1. only use useState Hook; 2. use UseEffect Hook (preferred).

  // * 1. only use useState Hook:
  // * drawback: the state value of index can change outside the click functions.
  const handlePrev = () => {
    console.log("function handlePrev", index);
    // ! Hooks must be called on the top level of our components.
    // ! If we want to run an effect conditionally, we can put that condition inside our Hook:
    const nIndex = () => {
      if (index <= 0) {
        return people.length - 1;
      }
      return index - 1;
    };

    setIndex(nIndex);

    // ! setIndex inside an if statement. This won`t work:
    // let newIndex = people.length - 1;
    // if (index <= 0) {
    //   console.log("newIndex: ", newIndex);
    //   setIndex(newIndex);
    //   console.log(index); // ! index here is still the initial value not the newIndex value.
    // }
    // setIndex(index - 1);
  };

  const handleNext = () => {
    const nIndex = () => {
      if (index >= people.length - 1) {
        return 0;
      }
      return index + 1;
    };

    setIndex(nIndex);
  };

  const increaseIndex = () => {
    setIndex(index + 1);
  };

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
        <button className="prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={increaseIndex}>increase index</button>
    </section>
  );
}

export default ReviewSlicerApp;
