import Header from "../Components/Header/Header";
import { useState } from "react";
import Form from "../Components/Form/Form";
// import { convertImageToBase64, emptyFileInpute } from "../utils/HelpesFunc";

import Posts from "../Components/Posts";
// import { postType } from "../interfaces/PostTypes";

function Home() {
  const [form, setForm] = useState({
    title: "",
    image: "",
    creator: "",
    message: "",
    tags: "",
  });

  // // optimise by changing it to form //maybe
  // async function handleChange(
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   e.preventDefault();
  //   const { name, value, files } = e.target as HTMLInputElement & {
  //     name: string;
  //     value: string;
  //     files?: FileList;
  //   };

  //   try {
  //     const inputeValue =
  //       name === "image" ? (await convertImageToBase64(files[0])) || "" : value;
  //     setForm((prev) => ({
  //       ...prev,
  //       [name]: inputeValue,
  //     }));
  //   } catch {
  //     console.log("error");
  //   }
  // }

  const [SelectedPostId, SetselectedPostId] = useState<string | null>(null);

  // // optimise by changing it to form //defently/maybe
  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   dispatch(CreatePost(form))
  //     .then(() => {
  //       setForm({
  //         title: "",
  //         image: "",
  //         creator: "",
  //         message: "",
  //         tags: "",
  //       });
  //       emptyFileInpute("imageInput");
  //       SetselectedPostId(null);
  //     })
  //     .catch((err: unknown) => {
  //       console.log(err);
  //     });
  // }

  // // optimise by changing it to form //defently/maybe
  // function handleUpdate() {
  //   dispatch(UpdatePost(form, SelectedPostId))
  //     .then(() => {
  //       setForm({
  //         title: "",
  //         image: "",
  //         creator: "",
  //         message: "",
  //         tags: "",
  //       });
  //       emptyFileInpute("imageInput");
  //     })
  //     .catch((err: unknown) => {
  //       console.log(err);
  //     });
  // }

  // // optimise by changing it to form //defently
  // function ClearForm() {
  //   setForm({
  //     title: "",
  //     image: "",
  //     creator: "",
  //     message: "",
  //     tags: "",
  //   });

  //   emptyFileInpute("imageInput");
  // }

  return (
    <div className=" m-4">
      <Header />
      <div className=" grid xl:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]  m-6 ">
        <div className="w-12/12">
          <div className=" grid  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-2  gap-4 ">
            <Posts
              setFormState={setForm}
              SetselectedPostId={SetselectedPostId}
              SelectedPostId={SelectedPostId}
            />
          </div>
        </div>

        <div className="xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6 w-full flex justify-center ">
          <Form
            formState={form}
            setFormState={setForm}
            selectedPostId={SelectedPostId}
            SetselectedPostId={SetselectedPostId}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
