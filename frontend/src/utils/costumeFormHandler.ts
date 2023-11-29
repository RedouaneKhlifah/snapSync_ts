import { costumeError } from "../services/redux/types/actionsTypes";

function costumeFormHandler(error: string): costumeError<string, string> {
  const ErrorArray = error.split(",");
  const inputeName = ErrorArray[1].replace(/"/g, "");

  const message = ErrorArray[0];

  const costume = {
    title: inputeName,
    message: message,
  };

  console.log(costume);
  return costume;
}

export { costumeFormHandler };
