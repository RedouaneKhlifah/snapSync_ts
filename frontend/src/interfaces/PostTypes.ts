import { setFormState } from "./FormTypes";

interface PostProps {
  post: postType;
  updateFormByPostData: (postData: postType) => void;
  selectedPostId: SelectedPostId;
  likePostFunc: (id: string) => void;
  deletePostFunc: (id: string) => void;
}

interface PostsProps extends setFormState {
  SelectedPostId: SelectedPostId;
  SetselectedPostId: setSelectedPostId;
}

interface postType {
  _id: string;
  title: string;
  image: string;
  date: string;
  creator: string;
  message: string;
  like: string;
  tags: string[];
}

type SelectedPostId = string | null;
type setSelectedPostId = React.Dispatch<React.SetStateAction<SelectedPostId>>;

export type { PostProps, postType, PostsProps };
