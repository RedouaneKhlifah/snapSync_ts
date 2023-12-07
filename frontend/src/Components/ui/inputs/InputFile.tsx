import PropTypes from "prop-types";
import React from "react";
import { InputFileProps } from "../../../interfaces/FormTypes";

interface InputFile {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputFile({ placeholder, name, onChange, Error }: InputFileProps) {
  return (
    <div className="text-sm">
        {Error?.title === name && Error.message && (
        <p className=" text-red-600 py-1  text-sm pb-4">{Error.message}</p>
      )}
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
