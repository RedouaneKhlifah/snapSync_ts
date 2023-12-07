import InputDf from "../ui/inputs/InputDf";
import InputFile from "../ui/inputs/InputFile";
import TextareaDf from "../ui/inputs/TextareaDf";
import Button from "../ui/button/Button";
import { FormProps } from "../../interfaces/FormTypes";
import { convertImageToBase64, emptyFileInpute } from "../../utils/HelpesFunc";
import {
  CreatePost,
  UpdatePost,
} from "../../services/redux/actions/PostActions";
import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/ReduxHooks";
import Loader from "../ui/loader/Loader";

function Form({
  formState,
  setFormState,
  selectedPostId,
  SetselectedPostId,
}: FormProps) {
  const loading = useAppSelector((state) => state.PostsReducer.FORM_LOADING);
  const newPost = useAppSelector((state) => state.PostsReducer.NEW_POST);
  const UpdatedPost = useAppSelector((state) => state.PostsReducer.UPDATE_POST);
  const FormError = useAppSelector((state) => state.PostsReducer.FORM_ERROR);

  const dispatch = useAppDispatch();

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    const { name, value, files } = e.target as HTMLInputElement & {
      name: string;
      value: string;
      files?: FileList;
    };

    try {
      const inputeValue =
        name === "image" ? (await convertImageToBase64(files[0])) || "" : value;
      setFormState((prev) => ({
        ...prev,
        [name]: inputeValue,
      }));
      console.log(formState);
    } catch {
      console.log("error");
    }
  }

  function ClearForm() {
    setFormState({
      title: "",
      image: "",
      creator: "",
      message: "",
      tags: "",
    });
    emptyFileInpute("imageInput");
  }

  useEffect(() => {
    if (newPost) {
      ClearForm();
    } else if (UpdatedPost) {
      ClearForm();
    }
    SetselectedPostId(null);
  }, [newPost, setFormState, UpdatedPost, SetselectedPostId]);

  useEffect(() => {
    if (newPost) {
      setFormState({
        title: "",
        image: "",
        creator: "",
        message: "",
        tags: "",
      });
      emptyFileInpute("imageInput");
    }
  }, [newPost, setFormState]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selectedPostId) {
      dispatch(CreatePost(formState));
    } else {
      dispatch(UpdatePost(selectedPostId, formState));
    }
  }
  return (
    <div className="bg-white w-10/12  ">
      <div className="border-[1px] rounded-lg px-5 py-4 shadow-xl xl:fixed w-[382px]">
        <h1 className="text-center  text-base font-semibold">
          {selectedPostId ? "update" : "Creating a Memory"}
        </h1>
        <form onSubmit={handleSubmit} className="relative h-[455.334px]">
          {loading ? (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader color="blue" />
            </div>
          ) : (
            <div className="flex flex-col gap-4 justify-center py-2 h h-[455.334px]">
              <InputDf
                label="creator"
                name="creator"
                onChange={handleChange}
                value={formState.creator}
                Error={FormError}
              />
              <InputDf
                label="title"
                name="title"
                onChange={handleChange}
                value={formState.title}
                Error={FormError}
              />
              <TextareaDf
                label="message"
                name="message"
                onChange={handleChange}
                value={formState.message}
                Error={FormError}
              />
              <InputDf
                label="tags"
                name="tags"
                onChange={handleChange}
                value={formState.tags}
                Error={FormError}
              />
              <InputFile
                placeholder="choose a file"
                name="image"
                onChange={handleChange}
                Error={FormError}
              />
              <Button
                name="SUBMIT"
                bgColor=" bg-gradient-to-l from-blue-500 to-blue-600 "
              />
              <Button
                name="CLEAR"
                bgColor="  bg-gradient-to-l from-red-500 to-red-600 "
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
