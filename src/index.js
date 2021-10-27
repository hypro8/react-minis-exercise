import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import "./App.css";

// import BirthdayReminder from "./01-birthday-reminder/App";
// import "./01-birthday-reminder/index.css";
// import ToursApp from "./02-tours/App";
// import "./02-tours/index.css";
// import ReviewsApp from "./03-Reviews/App";
// import "./03-Reviews/index.css";
// import Accordian from "./04-accordian/App";
// import "./04-accordian/index.css";
// import Menu from "./05-Menu/src/App";
// import "./05-Menu/src/index.css";

// import TabsApp from "./06-tabs/App";
// import "./06-tabs/index.css";

// import "./07-slicer/index.css";
// import ReviewSlicerApp from "./07-slicer/App";
// import ReviewSlicerApp_2 from "./07-slicer/App2";

// import "./08-Lorem-Ipsum/index.css";
// import LoremIpsum from "./08-Lorem-Ipsum/App";

// import "./09-color-generator/index.css";
// import ColorGenerator from "./09-color-generator/App";

import "./10-grocery-bud/index.css";
import GroceryBudApp from "./10-grocery-bud/App";

function App() {
  return (
    <>
      {/* <BirthdayReminder /> */}
      {/* <ToursApp /> */}
      {/* <ReviewsApp /> */}
      {/* <Accordian /> */}
      {/* <Menu /> */}
      {/* <TabsApp /> */}
      {/* <ReviewSlicerApp /> */}
      {/* <ReviewSlicerApp_2 /> */}
      {/* <LoremIpsum /> */}
      {/* <ColorGenerator /> */}
      <GroceryBudApp />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
