import { FaTimes } from "react-icons/fa";

const Accordion = ({ accordion, onDelete }) => {
  return (
    <div>
      <h3>
        {accordion.header}{" "}
        <FaTimes
          style={{ color: "red", curson: "pointer" }}
          onClick={() => onDelete(accordion.id)}
        />
      </h3>
      <p>{accordion.body}</p>
    </div>
  );
};

export default Accordion;
