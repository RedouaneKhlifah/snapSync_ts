import { postType } from "../../../interfaces/PostTypes"; // Replace with the actual type for your posts
import { ActionType, costumeError } from "../types/actionsTypes";

const localLikeUpdate = (
  state: State,
  posts: postType[],
  payload: postType
): postType[] => {
  const likedPostIndex = posts.findIndex((post) => post._id === payload._id);
  const likedPost = {
    ...posts[likedPostIndex],
    like: posts[likedPostIndex].like + 1,
  };
  const likedPosts = [...state.posts];
  likedPosts[likedPostIndex] = likedPost;
  return likedPosts;
};

const localUpdate = (
  state: State,
  posts: postType[],
  payload: postType
): postType[] => {
  const updatePostIndex = posts.findIndex((post) => post._id === payload._id);
  const updatePost = {
    ...state.posts[updatePostIndex],
    title: payload.title,
    message: payload.message,
    creator: payload.creator,
    image: payload.image,
    tags: payload.tags,
  };

  const updatePosts = [...state.posts];
  updatePosts[updatePostIndex] = updatePost;
  return updatePosts;
};

const localDelete = (posts: postType[], payload: postType): postType[] => {
  const updatedPosts = posts.filter((post) => post._id !== payload._id);
  return updatedPosts;
};

interface State {
  posts: postType[];
  POSt_LOADING: boolean | null;
  FORM_LOADING: boolean | null;
  POST_ERROR: string | null;
  FORM_ERROR: string | costumeError<string, string> | null;
  DELETE_LOADING: boolean | null;
  NEW_POST: postType | null;
  UPDATE_POST: postType | null;
}

const initialState: State = {
  posts: [],
  POSt_LOADING: null,
  FORM_LOADING: null,
  POST_ERROR: null,
  FORM_ERROR: null,
  DELETE_LOADING: null,
  NEW_POST: null,
  UPDATE_POST: null,
};

const PostsReducer = (state: State = initialState, action: ActionType) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
        POSt_LOADING: false,
        FORM_LOADING: false,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        FORM_LOADING: false,
        NEW_POST: action.payload,
        POST_ERROR: null,
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: localUpdate(state, state.posts, action.payload),
        FORM_LOADING: false,
        POST_ERROR: null,
        UPDATE_POST: action.payload,
        DELETE_LOADING: null,
      };
    case "LIKE_POST":
      return {
        ...state,
        posts: localLikeUpdate(state, state.posts, action.payload),
        POSt_LOADING: false,
        POST_ERROR: null,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: localDelete(state.posts, action.payload),
        POSt_LOADING: false,
        POST_ERROR: null,
      };
    case "POSt_LOADING":
      return { ...state, POSt_LOADING: true, POST_ERROR: null };
    case "FORM_LOADING":
      return { ...state, FORM_LOADING: true, FORM_ERROR: null };
    case "POST_ERROR":
      return { ...state, POSt_LOADING: false, POST_ERROR: action.payload };
    case "FORM_ERROR":
      return { ...state, FORM_LOADING: false, FORM_ERROR: action.payload };

    case "DELETE_LOADING":
      return { ...state, DELETE_LOADING: true };
    default:
      return state;
  }
};

export { PostsReducer };
