import { Textarea } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { InputProps } from "../../../interfaces/FormTypes";

function TextareaDf({ label, name, onChange, value }: InputProps) {
  return (
    <div className="w-full  ">
      <Textarea label={label} name={name} onChange={onChange} value={value} />
    </div>
  );
}

TextareaDf.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default TextareaDf;
