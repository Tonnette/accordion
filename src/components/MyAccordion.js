import { FaTimes } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const newAccordion = ({ accordion, onDelete }) => {
  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {accordion.header}{" "}
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
    </div>
  );
};

export default newAccordion;
