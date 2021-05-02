import MyAccordion from "./MyAccordion";

const Accordions = ({ accordions, onDelete }) => {
  return (
    <>
      {accordions.map((accordion) => (
        <MyAccordion
          key={accordion.id}
          accordion={accordion}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Accordions;
