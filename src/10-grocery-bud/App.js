import React, { useState } from "react";
import List from "./List";

function GroceryBudApp() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault(); // ! remember add this
    console.log("submit clicked");
  };

  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          <input type="text" />
        </form>
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default GroceryBudApp;
