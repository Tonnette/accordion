import PropTypes from "prop-types";
// import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      {/* <h1>{title}</h1> */}
      {/* <Button color="green" text="add" onClick={onAdd} /> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Accordion Creator",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
