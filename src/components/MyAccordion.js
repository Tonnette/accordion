import { FaTimes } from "react-icons/fa";
// import { BsFillCaretDownFill } from "react-icons/bs";
import { BsArrow90DegDown } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const newAccordion = ({ accordion, onDelete }) => {
  const mystyle = {
    padding: "20px",
    fontFamily: "Arial",
    color: "#525252",
  };

  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <BsArrow90DegDown /> {accordion.header}
            </Accordion.Toggle>

            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(accordion.id)}
            />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{accordion.body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />

      <details style={mystyle}>
        <summary>
          <strong>{accordion.header}</strong>
          <FaTimes
            style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
            onClick={() => onDelete(accordion.id)}
          />
        </summary>
        <br />
        <p>{accordion.body}</p>
      </details>
      <br />
    </div>
  );
};

export default newAccordion;
