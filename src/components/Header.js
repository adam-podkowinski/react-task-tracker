import PropTypes from "prop-types";
import "../index.css";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("FROM HEADER");
  };

  return (
    <header className={"header"}>
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
