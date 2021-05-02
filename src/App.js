import React, { Component } from "react";
import { useState } from "react";
// import Form from "./components/Form";
import "./App.css";
import Header from "./components/Header";
import Accordions from "./components/Accordions";
import AddAccordion from "./components/AddAccordion";

const App = () => {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      header: "Header One",
      body: "Body One",
    },
    {
      id: 2,
      header: "Header Two",
      body: "Body Two",
    },
    {
      id: 3,
      header: "Header Three",
      body: "Body Three",
    },
  ]);

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
      <Header />
      <AddAccordion onAdd={addAccordion} />
      <Accordions accordions={accordions} onDelete={deleteAccordion} />
    </div>
  );
};

export default App;
