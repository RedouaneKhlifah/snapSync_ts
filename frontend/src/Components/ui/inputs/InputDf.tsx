import { Input } from "@material-tailwind/react";
import PropTypes from "prop-types";
import { InputProps } from "../../../interfaces/FormTypes";

function InputDf({ label, name, onChange, value, Error }: InputProps) {
  console.log("InputProps");
  console.log(Error);
  console.log(name);

  return (
    <div className="w-full border-[1px]  ">
      {Error?.title === name && Error.message && (
        <p className=" text-red-600 py-1  text-sm pb-4 ">{Error.message}</p>
      )}
      <Input
        onChange={onChange}
        label={label}
        name={name}
        value={value}
        crossOrigin={undefined}
      />
    </div>
  );
}

InputDf.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputDf;
