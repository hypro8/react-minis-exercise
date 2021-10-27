import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const { name, job, image, text } = people[index];

  // const nextPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return newIndex;
  //   });
  // };

  const nextPerson = () => {
    let newIndex = checkNumber(index + 1, people);
    setIndex(newIndex);
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = checkNumber(index - 1, people);
      return newIndex;
    });
  };

  const checkNumber = (num, array) => {
    if (num > array.length - 1) {
      return 0;
    } else if (num < 0) {
      return array.length - 1;
    } else {
      return num;
    }
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber, people));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button>
          <FaChevronLeft className="prev-btn" onClick={prevPerson} />
        </button>
        <button>
          <FaChevronRight className="next-btn" onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;
