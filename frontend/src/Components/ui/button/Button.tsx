import PropTypes from "prop-types";
import { ButtonProps } from "../../../interfaces/FormTypes";

function Button({ name, bgColor }: ButtonProps) {
  return (
    <button
      className={`${bgColor} w-full text-white rounded-md py-[4px]   `}
      name={name}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Button;
