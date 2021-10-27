import React, { useState } from "react";
import data from "./data";
import List from "./List";
function BirthdayReminder() {
    const [people, setPeople] = useState(data);

    const clickClearAll = () => {
        console.log("click");
        setPeople([]);
    };
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthday today</h3>
                <List people={people} />
                <button onClick={clickClearAll}>Clear All</button>
            </section>
        </main>
    );
}

export default BirthdayReminder;
