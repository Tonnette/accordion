import { useState } from "react";
import "./App.css";
import Accordions from "./components/Accordions";
import AddAccordion from "./components/AddAccordion";
// import PropTypes from "prop-types";

const App = () => {
  const [accordions, setAccordions] = useState([]);

  //Adding default Props
  App.defaultProps = {
    id: 1,
    header: "click to reveal",
    body: "body",
  };

  //Add Accordion
  const addAccordion = (accordion) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newAccordion = { id, ...accordion };
    setAccordions([...accordions, newAccordion]);
  };

  //delete Accordion
  const deleteAccordion = (id) => {
    setAccordions(accordions.filter((accordion) => accordion.id !== id));
  };

  return (
    // <div>
    //   <Form />
    // </div>
    <div>
      {/* <Header /> */}
      <AddAccordion onAdd={addAccordion} />
      <Accordions accordions={accordions} onDelete={deleteAccordion} />
    </div>
  );
};

export default App;
