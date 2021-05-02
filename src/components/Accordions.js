import Accordion from "./Accordion";

const Accordions = ({ accordions, onDelete }) => {
  return (
    <>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          accordion={accordion}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Accordions;
