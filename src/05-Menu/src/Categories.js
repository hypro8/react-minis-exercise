import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container" style={{ background: "purple" }}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      {/* 
      <button className="filter-btn" onClick={() => filterItems("shakes")}>
        shakes
      </button> */}
    </div>
  );
};

export default Categories;
