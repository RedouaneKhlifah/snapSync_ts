interface ButtonProps {
  name: string;
  bgColor: string;
}

interface InputProps {
  label: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
}

interface InputFileProps {
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps extends setFormState {
  formState: formState;
  selectedPostId: selectedPostId;
  SetselectedPostId: SetselectedPostId;
}

interface setFormState {
  setFormState: React.Dispatch<React.SetStateAction<formState>>;
}

interface formState {
  title: string;
  image: string;
  creator: string;
  message: string;
  tags: string;
}
type selectedPostId = string | null;

type SetselectedPostId = React.Dispatch<React.SetStateAction<selectedPostId>>;

export type {
  ButtonProps,
  InputProps,
  InputFileProps,
  FormProps,
  formState,
  setFormState,
};
