import { Spinner } from "@material-tailwind/react";
import { LoaderProps } from "../../../interfaces/LoaderProps";

function Loader({ color }: LoaderProps) {
  return (
    <div className="flex gap-8">
      <Spinner color={color} />
    </div>
  );
}

export default Loader;
