import { useState } from "react";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Accordion from "react-bootstrap/Accordion";
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./AddAccordion.css";

const AddAccordion = ({ onAdd }) => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!header) {
      alert("please add a new accordion");
      return;
    }
    onAdd({ header, body });
    setHeader("");
    setBody("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Jumbotron>
            <h1>
              <strong>Accordion App</strong>
            </h1>
          </Jumbotron>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p className="myName">
            <strong>Input Fields</strong>
          </p>

          <form onSubmit={onSubmit}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Add Accordion Header</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="Add Accordion Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              />
            </InputGroup>
            <br />

            {/* <input
                type="text"
                placeholder="Add Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
              ></input> */}

            {/* <label className="myHeader">Body Text</label> */}
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Body Text</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="Add body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </InputGroup>
            {/* 
            <input
              type="text"
              placeholder="Add Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></input> */}
            <br />
            <Button
              variant="primary"
              size="lg"
              block
              type="submit"
              value="Add Accrodion"
            >
              Add Accordion
            </Button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAccordion;
