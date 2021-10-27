import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

// ? extract raw values from "categories" in items data
const allCategories_raw = items.map((item) => item.category);
console.log("items: ", items);
console.log("type of items", typeof items); // Array object
console.log("allCategories_raw: ", allCategories_raw);
console.log("type of allCategories_raw: ", typeof allCategories_raw);

// ? get unique values of all categoies using new Set (return an Object)
// * RETURN: Set(3) {'breakfast', 'lunch', 'shakes'}
const allCategories_object = new Set(allCategories_raw);
console.log("allCategories_object: ", allCategories_object);
// Set object
console.log("type of allCategories_object", typeof allCategories_object);

// ? change allCategories Object to an array
// * RETURN: (4) ['all', 'breakfast', 'lunch', 'shakes']
const allCategories = ["all", ...allCategories_object];
console.log(allCategories);
console.log("type of allCategories: ", typeof allCategories); // Array object

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
