import { useState } from "react";

const AddAccordion = ({ onAdd }) => {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!header) {
      alert("please add header");
      return;
    }
    onAdd({ header, body });
    setHeader("");
    setBody("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Accordion</label>
        <input
          type="text"
          placeholder="Add Header"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Body</label>
        <input
          type="text"
          placeholder="Add Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
      </div>
      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
};

export default AddAccordion;
