import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./form.css";
// import Accordion from "./accordion";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accordions: [
        { id: 1, AccordionHeader: "header", AccordionBody: "body" },
        { id: 2, AccordionHeader2: "header", AccordionBody2: "body" },
        { id: 3, AccordionHeader3: "header", AccordionBody3: "body" },
      ],
    };
  }

  //   addAccordion = () => {
  //     const { accordions } = this.state;
  //     accordions.push({
  //       id: 4,
  //       AccordionHeader: "header",
  //       AccordionBody: "body",
  //     });
  //     this.setState({ accordions: [...accordions] });
  //     console.log("new state", this.state.accordions);
  //   };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log("finale data is", data.AccordionHeader, data.AccordionBody);
    console.log("finale data is", data.AccordionHeader2, data.AccordionBody2);
    console.log("finale data is", data.AccordionHeader3, data.AccordionBody3);
  };

  handleInputChange1 = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputChange2 = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleInputChange3 = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      AccordionHeader,
      AccordionBody,
      AccordionHeader2,
      AccordionBody2,
      AccordionHeader3,
      AccordionBody3,
    } = this.state;
    return (
      <div>
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
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <p className="myName">
                <strong>Header Input 1</strong>
              </p>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Accordion header"
                    name="AccordionHeader"
                    onChange={this.handleInputChange1}
                  ></input>
                </p>
                <p className="myName">
                  <strong>Body Input 1</strong>
                </p>

                <p>
                  <input
                    type="text"
                    placeholder="Accordion body"
                    name="AccordionBody"
                    onChange={this.handleInputChange1}
                  ></input>
                </p>
                <p className="myName">
                  <Button>Send to Accordion 1</Button>
                </p>
              </form>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <p className="myName">
                <strong>Header Input 2</strong>
              </p>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Accordion header"
                    name="AccordionHeader2"
                    onChange={this.handleInputChange2}
                  ></input>
                </p>
                <p className="myName">
                  <strong>Body Input 2</strong>
                </p>

                <p className="myName">
                  <input
                    type="text"
                    placeholder="Accordion body"
                    name="AccordionBody2"
                    onChange={this.handleInputChange2}
                  ></input>
                </p>
                <p className="myName">
                  <Button variant="warning">Send to Accordion 2</Button>
                </p>
              </form>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <p className="myName">
                <strong>Header Input 3</strong>
              </p>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <input
                    type="text"
                    placeholder="Accordion header"
                    name="AccordionHeader3"
                    onChange={this.handleInputChange3}
                  ></input>
                </p>
                <p className="myName">
                  <strong>Body Input 3</strong>
                </p>

                <p className="myName">
                  <input
                    type="text"
                    placeholder="Accordion body"
                    name="AccordionBody3"
                    onChange={this.handleInputChange3}
                  ></input>
                </p>
                <p className="myName">
                  <Button variant="info">Send to Accordion 3</Button>
                </p>
              </form>
            </div>
          </div>
        </div>

        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                1. {AccordionHeader}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{AccordionBody}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                2. {AccordionHeader2}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{AccordionBody2}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                3. {AccordionHeader3}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{AccordionBody3}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Form;
