import PropTypes from "prop-types";
import React from "react";
import { InputFileProps } from "../../../interfaces/FormTypes";

interface InputFile {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputFile({ placeholder, name, onChange }: InputFileProps) {
  return (
    <div className="text-sm">
      <input
        onChange={onChange}
        id="imageInput"
        type="file"
        name={name}
        placeholder={placeholder}
        accept=".jpeg,.png,.jpg"
      />
    </div>
  );
}

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputFile;
